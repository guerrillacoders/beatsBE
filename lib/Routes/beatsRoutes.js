const { Router } = require('express');
const Beats = require('../Models/Beats');

module.exports = Router()

  .post('/', (req, res, next) => {

    const {
      name,
      sound
    } = req.body;

    Beats
      .create({ name, sound })
      .then(beat => res.send(beat))
      .cathch(next);
  })
  
  .get('/', (req, res, next) => {
    Beats
      .find()
      .then(beats => res.send(beats))
      .catch(next);
  });

