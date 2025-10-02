import { Sequelize } from "sequelize";
import { sequelize } from "./index.js";

export const Contact = sequelize.define('contact', {
  name: {
    type: Sequelize.STRING,
  },
  phoneNumber: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING
  }
});