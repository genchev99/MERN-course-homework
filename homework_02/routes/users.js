const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = (await user.find()).map(user => user.toObject());

  res.json({users});
});

/**
 * Creates a new user in the database
 */
router.post('/', async (req, res) => {
  try {
    const {_id} = await user.create(req.body);
    res.status(201).location(`/users/${_id}`).send(_id);
  } catch (e) {
    res.json({error: e.toString()});
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
    res.send('Users collection successfully dropped!');
  }
});

router.get('/:userId', async (req, res) => {

});

module.exports = router;
