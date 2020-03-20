const express = require('express');

const projects = require('./model.js');

const router = express.Router();

router.post('/', ({body: {name, description}}, res) => {
  projects.insert({name, description})
    .then(project => res.status(201).json(project))
    .catch(() => res.status(500).json({message: 'Failed to create project'}));
});

router.get('/', (req, res) => {
  projects.get()
    .then(ps => {
      res.json(ps);
    })
    .catch(() => {
      res.status(500).json({message: 'Failed to get projects'});
    });
});

router.get('/:id', ({params: {id}}, res) => {
  projects.getById(id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({message: 'Could not find project with given id.'});
      }
    })
    .catch(() => res.status(500).json({message: 'Failed to get project'}));
});

module.exports = router;
