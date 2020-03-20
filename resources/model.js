const db = require('../data/dbConfig');

module.exports = {
  insert,
  get,
  getById
};

function insert(resource) {
  return db('resources')
    .insert(resource)
    .then(([id]) => getById(id));
}

function get() {
  return db('resources');
}

function getById(id) {
  return db('resources')
    .where({id})
    .first();
}
