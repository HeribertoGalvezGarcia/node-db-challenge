exports.up = knex =>
  knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable();
      tbl.string('description');
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name')
        .notNullable()
        .unique();
      tbl.string('description');
    })
    .createTable('projectResources', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.primary(['project_id', 'resource_id']);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description')
        .notNullable();
      tbl.string('notes');
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    });

exports.down = knex =>
  knex.schema
    .dropSchemaIfExists('tasks')
    .dropSchemaIfExists('projectResources')
    .dropSchemaIfExists('resources')
    .dropTableIfExists('projects');
