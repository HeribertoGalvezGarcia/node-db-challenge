const express = require('express');

const resources = require('./model.js');

const router = express.Router();

router.post('/', ({body: {name, description}}, res) => {
  resources.insert({name, description})
    .then(resource => res.status(201).json(resource))
    .catch(() => res.status(500).json({message: 'Failed to create resource'}));
});

router.get('/', (req, res) => {
  resources.get()
    .then(rs => {
      res.json(rs);
    })
    .catch(() => {
      res.status(500).json({message: 'Failed to get resource'});
    });
});

router.get('/:id', ({params: {id}}, res) => {
  resources.getById(id)
    .then(resource => {
      if (resource) {
        res.json(resource);
      } else {
        res.status(404).json({message: 'Could not find resource with given id.'});
      }
    })
    .catch(() => res.status(500).json({message: 'Failed to get resource'}));
});

module.exports = router;
