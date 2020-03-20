exports.seed = knex =>
  knex('projects').del()
    .then(() =>
      knex('projects').insert([
        {id: 1, name: 'project name here', description: 'the project description', completed: false}
      ])
    );
