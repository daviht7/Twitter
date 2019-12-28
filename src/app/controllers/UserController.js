import User from '../models/User'
import Address from '../models/Address'

class UserController {

  /* retorna todos usuarios */
  async index(req, res) {
    const users = await User.findAll({
      include : [{
        model: Address,
          as: "address"
      }]
    });
    return res.json(users)
  }

}

export default new UserController()