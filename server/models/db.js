import { Sequelize } from "sequelize";

const db = new Sequelize("inventorytest", "postgres", "chemistryis1", {
  host: "localhost",
  dialect: "postgres",
  port: 5000,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
