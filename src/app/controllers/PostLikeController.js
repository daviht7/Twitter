import PostLike from '../models/post_like'
import Post from '../models/Post'
import User from '../models/User'

class PostLikeController {

  /* retorna todos posts */
  async index(req, res) {
    const posts = await PostLike.findAll({
      attributes : ["id"],
      include : [{
        attributes : ["id","name","username"],
        model: User,
          as: "user"
      },{
        attributes : ["id","message","status"],
        model: Post,
          as: "post"
      }]
    });
    return res.json(posts)
  }

  /* retorna todos posts */
  async searchPostOfUserLike(req, res) {

    const {id} = req.params

    const posts = await PostLike.findAll({
      where : {
        user_id : id      
      },
      attributes : ["id"],
      include : [{
        attributes : ["id","message","status"],
        model: Post,
          as: "post"
      }]
    });
    return res.json(posts)
  }

}

export default new PostLikeController()