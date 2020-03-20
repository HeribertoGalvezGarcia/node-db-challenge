const db = require('../data/dbConfig');

module.exports = {
  insert,
  get,
  getById
};

function insert(project) {
  return db('projects')
    .insert(project)
    .then(([id]) => getById(id));
}

function get() {
  return db('projects')
    .then(projects => projects.map(project => ({...project, completed: !!project.completed})));
}

function getById(id) {
  return db('projects')
    .where({id})
    .first()
    .then(project => project ? {...project, completed: !!project.completed} : null);
}
