// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      timezone: "Asia/Jakarta",
    },
    pool: {
      min: 2,
      max: 10,
    },
    dateString: ["timestamp", "timestamptz"],
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
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      timezone: "Asia/Jakarta",
    },
    pool: {
      min: 2,
      max: 10,
    },
    dateString: ["timestamp", "timestamptz"],
    migrations: {
      directory: "./Database/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./Database/seeds",
    },
  },
};
