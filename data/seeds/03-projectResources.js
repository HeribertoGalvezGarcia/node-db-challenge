exports.seed = knex =>
  knex('projectResources').del()
    .then(() =>
      knex('projectResources').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 1, resource_id: 2}
      ])
    );
