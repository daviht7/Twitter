import Sequelize, { Model } from "sequelize";

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        message: Sequelize.STRING,
        status: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
  
}

export default Post;
