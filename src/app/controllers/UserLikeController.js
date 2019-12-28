import UserLike from '../models/user_like'
import Post from '../models/Post'
import User from '../models/User'

class UserLikeController {

  /* retorna todos usuários que seguem tais usuários */
  async index(req, res) {
    const users = await UserLike.findAll();
    return res.json(users)
  }

  /* retorna todos usuários que o id segue */
  async searchFollowerOfUser(req, res) {
    const {id}= req.params
    const users = await UserLike.findAll({
      attributes : ["user_followed_id"],
      where : {
        user_follower_id : id
      }
    });
    return res.json(users)
  }

  /* retorna todos usuários que seguem o id*/
  async searchFollowedOfUser(req, res) {
    const {id}= req.params
    const users = await UserLike.findAll({
      attributes : ["user_follower_id"],
      where : {
        user_followed_id : id
      }
    });
    return res.json(users)
  }

}

export default new UserLikeController()