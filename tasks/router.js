const express = require('express');

const tasks = require('./model.js');

const router = express.Router();

router.post('/', ({body: {description, notes, project_id, completed}}, res) => {
  tasks.insert({description, notes, project_id})
    .then(task => res.status(201).json(task))
    .catch(() => res.status(500).json({message: 'Failed to create task'}));
});

router.get('/', (req, res) => {
  tasks.get()
    .then(ts => {
      res.json(ts);
    })
    .catch(() => {
      res.status(500).json({message: 'Failed to get tasks'});
    });
});

router.get('/:id', ({params: {id}}, res) => {
  tasks.getById(id)
    .then(task => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({message: 'Could not find task with given id.'});
      }
    })
    .catch(() => res.status(500).json({message: 'Failed to get task'}));
});

module.exports = router;
