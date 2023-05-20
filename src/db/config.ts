import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";

const connection = new Sequelize({
  dialect: "mysql",
  host: "nodelv3-sequelize-database.chor1u6y1bwu.ap-northeast-2.rds.amazonaws.com",
  username: "root",
  password: "poiu4321",
  database: "todo",
  logging: false,
  models: [Todos],
});

export default connection;
