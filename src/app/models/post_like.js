import Sequelize, { Model } from "sequelize";

class PostLike extends Model {
  static init(sequelize) {
    super.init(
      {
        
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Post, { foreignKey: "post_id", as: "post" });
  }
  
}

export default PostLike;
