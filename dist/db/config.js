"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const todos_1 = require("../models/todos");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "nodelv3-sequelize-database.chor1u6y1bwu.ap-northeast-2.rds.amazonaws.com",
    username: "root",
    password: "poiu4321",
    database: "todo",
    logging: false,
    models: [todos_1.Todos],
});
exports.default = connection;
