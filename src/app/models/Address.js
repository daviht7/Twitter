import Sequelize, { Model } from "sequelize";

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        country : Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
  
}

export default Address;
