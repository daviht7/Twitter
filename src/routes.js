import { Router } from "express";

const routes = new Router();

routes.get("/", (req,res) => {
  console.log("OK PRIMEIRO ROTA")
  res.send("ok")
})

export default routes;