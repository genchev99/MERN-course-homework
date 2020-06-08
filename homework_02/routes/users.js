const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');
const recipe = require('../models/recipe');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = (await user.find()).map(user => user.toObject());

  res.json({...users});
});

/**
 * Creates a new user in the database
 */
router.post('/', async (req, res) => {
  try {
    const {_id} = await user.create(req.body);
    res.status(201).location(`/users/${_id}`).json({id: _id});
  } catch (e) {
    const status = e.code === 11000 ? 409 : 400;
    res.status(status).json({error: e.toString()});
  }
});

/**
 * Deletes all users
 */
router.delete('/', async (req, res) => {
  try {
    await user.collection.drop();
  } catch (e) {
    if (e.code === 26) {
      console.log('namespace %s not found', user.collection.name)
    } else {
      /* Todo return error */
      throw e;
    }
  } finally {
    res.json({message: 'Users collection successfully dropped!'});
  }
});

router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const userById = await user.findOne({_id: userId});

    if (!userById) {
      res.status(404).json({error: `Invalid user ID: ${userId}`});
    } else {
      res.json({...userById.toObject()});
    }
  } catch (e) {
    res.status(400).json({error: `Invalid user ID: ${userId}`});
  }
});

router.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const userById = await user.findOneAndDelete({_id: userId}, {strict: true});

    if (!userById) {
      res.status(404).json({error: `Invalid user ID: ${userId}`});
    } else {
      res.json({...userById.toObject()});
    }
  } catch (e) {
    res.status(400).json({error: `Invalid user ID: ${userId}`});
  }
});

router.put('/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const userById = await user.findOneAndUpdate({_id: userId}, req.body, {new: true, runValidators: true});

    if (!userById) {
      res.status(404).json({error: `Invalid user ID: ${userId}`});
    } else {
      res.json({...userById.toObject()});
    }
  } catch (e) {
    if (e.kind === 'ObjectId') {
      res.status(400).json({error: `Invalid user ID: ${userId}`});
    } else {
      res.status(400).json({error: e.toString()});
    }
  }
});

router.get('/:userId/recipes', async (req, res) => {
  const userId = req.params.userId;
  const recipes = (await recipe.find({user: userId})).map(recipe => recipe.toObject());

  res.json({...recipes});
});

router.post('/:userId/recipes', async (req, res) => {
  const userId = req.params.userId;
  const newRecipe = await recipe.create({...req.body, user: userId});

  res.status(201).location(`/users/${userId}/recipes/${newRecipe._id}`).json({...newRecipe.toObject()});
});

router.delete('/:userId/recipes/:recipeId', async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  try {
    const recipeById = await recipe.findOneAndDelete({_id: recipeId, user: userId}, {strict: true});

    if (!recipeById) {
      res.status(404).json({error: `Invalid user or recipe IDs: user ID: ${userId}; recipe ID: ${recipeId}`});
    } else {
      res.json({...recipeById.toObject()});
    }
  } catch (e) {
    res.status(400).json({error: `Invalid user or recipe IDs: user ID: ${userId}; recipe ID: ${recipeId}`});
  }
});

router.put('/:userId/recipes/:recipeId', async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  try {
    const recipeById = await recipe.findOneAndUpdate({_id: recipeId, user: userId}, req.body, {new: true, runValidators: true});

    if (!recipeById) {
      res.status(404).json({error: `Invalid user or recipe IDs: user ID: ${userId}; recipe ID: ${recipeId}`});
    } else {
      res.json({...recipeById.toObject()});
    }
  } catch (e) {
    if (e.kind === 'ObjectId') {
      res.status(400).json({error: `Invalid user or recipe IDs: user ID: ${userId}; recipe ID: ${recipeId}`});
    } else {
      res.status(400).json({error: e.toString()});
    }
  }
});

router.get('/:userId/recipes/:recipeId', async (req, res) => {
  const userId = req.params.userId;
  const recipeId = req.params.recipeId;

  try {
    const recipeById = await recipe.findOne({_id: recipeId, user: userId});

    if (!recipeById) {
      res.status(404).json({error: `Invalid user or recipe IDs: user ID: ${userId}; recipe ID: ${recipeId}`});
    } else {
      res.json({...recipeById.toObject()});
    }
  } catch (e) {
    res.status(400).json({error: `Invalid user or recipe IDs: user ID: ${userId}; recipe ID: ${recipeId}`});
  }
});

module.exports = router;
