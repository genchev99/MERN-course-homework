const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');

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
      res.status(400).json({error: `Invalid user ID: ${userId}`});
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
      res.status(400).json({error: `Invalid user ID: ${userId}`});
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
    const userById = await user.findOneAndUpdate({_id: userId}, req.body, {new: true});

    if (!userById) {
      res.status(400).json({error: `Invalid user ID: ${userId}`});
    } else {
      res.json({...userById.toObject()});
    }
  } catch (e) {
    res.status(400).json({error: `Invalid user ID: ${userId}`});
  }
});

module.exports = router;
