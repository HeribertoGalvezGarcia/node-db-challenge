const db = require('../data/dbConfig');

module.exports = {
  insert,
  get,
  getById
};

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(([id]) => getById(id));
}

function get() {
  return db('tasks')
    .then(task => task.map(task => ({...task, completed: !!task.completed})));
}

function getById(id) {
  return db('tasks')
    .where({id})
    .first()
    .then(task => task ? {...task, completed: !!task.completed} : null);
}
