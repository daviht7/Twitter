import { Router } from "express";
import UserController from './app/controllers/UserController'
import AddressController from './app/controllers/AddressController'
import PostController from './app/controllers/PostController'
import PostLikeController from './app/controllers/PostLikeController'
import UserLikeController from './app/controllers/UserLikeController'

const routes = new Router();

routes.get("/users",UserController.index);

routes.get("/addresses",AddressController.index)

routes.get("/posts",PostController.index)
routes.get("/posts/:id",PostController.searchPostOfUser)


routes.get("/postlikes",PostLikeController.index)
routes.get("/postlikes/:id",PostLikeController.searchPostOfUserLike)

routes.get("/userlikes",UserLikeController.index)
routes.get("/userlikes/follower/:id",UserLikeController.searchFollowerOfUser)
routes.get("/userlikes/followed/:id",UserLikeController.searchFollowedOfUser)


export default routes;