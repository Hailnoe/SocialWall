
exports.up = function(knex) {
    return knex.schema.createTable('images', (table) => {
      table.increments('id').primary();
      table.binary('contents').notNullable();
      table.text('mimetype').notNullable();
      table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
      table.timestamp('updated_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('images');
  };
  