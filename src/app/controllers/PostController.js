import User from '../models/User'
import Post from '../models/Post'

class PostController {

  /* retorna todos posts */
  async index(req, res) {
    const posts = await Post.findAll({
      attributes : ["id","message","status"],
      include : [{
        attributes : ["id","name","username"],
        model: User,
          as: "user"
      }]
    });
    return res.json(posts)
  }

  async searchPostOfUser(req, res) {

    const {id} = req.params

    const posts = await Post.findAll({
      attributes : ["id","message","status"],
      where : {
        user_id : id
      }
    });

    if(posts.length < 1) 
    return res.status(404).send({error : "no one posts finded out"})

    return res.json(posts)
  }

}

export default new PostController()