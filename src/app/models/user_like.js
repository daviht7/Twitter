import Sequelize, { Model } from "sequelize";

class UserLike extends Model {
  static init(sequelize) {
    super.init(
      {
        user_follower_id : Sequelize.INTEGER,
        user_followed_id : Sequelize.INTEGER
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: "users_id", as: "user_follower" });
    this.hasOne(models.User, { foreignKey: "users_id", as: "user_followed" });
  }
  
}

export default UserLike;
