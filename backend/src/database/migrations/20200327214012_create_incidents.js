/**
 * criação da tabela
 */
exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    /**
     * campo auto incremental
     */
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    /**
     * campo para fazer referencia na tabela ongs
     */
    table.string("ong_id").notNullable();
    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};
/**
 * caso de problema na criação da tabela
 */
exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
