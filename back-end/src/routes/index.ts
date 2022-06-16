import { AuthController } from './../domain/user/controller/auth.controller';
import { UserController } from './../domain/user/controller/users.controller';
import { PostController } from './../domain/post/controller/postController';
// const userValidator = require('./../validators/cadastroUserValidator');
// const loginValidator = require('./../validators/');
const express = require("express"),
routes = express.Router();

routes.post("/user/cadastro", UserController.create);
routes.put("/user/:id/atualizar", UserController.update);
routes.delete("/user/:id/delete", UserController.delete);
routes.get("/user", UserController.getAll);
routes.get("/user/:id", UserController.getOne);

routes.post("/post/cadastro", PostController.create);
routes.put("/post/:id/atualizar", PostController.update);
routes.delete("/post/:id/deletar", PostController.delete);
routes.get("/post", PostController.getAll);
routes.get("/post/:id", PostController.getOne);

routes.post("/login", AuthController.login);



module.exports = routes;