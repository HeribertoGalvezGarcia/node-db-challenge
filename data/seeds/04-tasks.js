exports.seed = knex =>
  knex('tasks').del()
    .then(() =>
      knex('tasks').insert([
        {id: 1, project_id: '1', description: 'task description', notes: 'the task notes', completed: false},
        {id: 7, project_id: '1', description: 'another task description', notes: 'the task notes', completed: false}
      ])
    );
