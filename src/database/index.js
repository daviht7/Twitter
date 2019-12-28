import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Address from "../app/models/Address";
import User from "../app/models/User";
import Post from "../app/models/Post";
import PostLike from "../app/models/post_like";
import UserLike from "../app/models/user_like";

const models = [Address,User,Post,PostLike,UserLike];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

}

export default new Database();