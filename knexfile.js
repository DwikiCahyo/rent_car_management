// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_DEVELOPMENT,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./Database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./Database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./Database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./Database/seeds",
    },
  },
};
