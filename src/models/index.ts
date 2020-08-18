import * as sequelize from "sequelize";
import { UserFactory } from "./user.model";
import * as dotenv from "dotenv";

dotenv.config();

export const dbConfig: any = new sequelize.Sequelize(
  process.env.DB_NAME || "db",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "password",
  {
    port: Number(process.env.DB_PORT) || 3306,
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export const User: any = UserFactory(dbConfig);
