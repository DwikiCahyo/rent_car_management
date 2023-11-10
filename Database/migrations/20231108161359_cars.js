/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cars", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("plate", 20).notNullable();
    table.string("manufacture", 100).notNullable();
    table.text("image").notNullable();
    table.string("model", 100).notNullable();
    table.string("type", 200).notNullable();
    table.text("description").notNullable();
    table.string("transmission", 20).notNullable();
    table.integer("capacity").notNullable();
    table.bigint("rentPerDay").notNullable();
    table.datetime("availableAt").notNullable().defaultTo(knex.fn.now());
    table.boolean("available").notNullable().defaultTo(false);
    table.integer("year", 4).notNullable();
    table.jsonb("options").notNullable();
    table.jsonb("specs").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cars");
};
