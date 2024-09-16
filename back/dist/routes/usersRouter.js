"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// DEMO: import { createUser, getUsers, deleteUser } from "../controllers/usersControllers";
const usersControllers_1 = require("../controllers/usersControllers");
const routerUsers = (0, express_1.Router)();
//GET /users => Obtener el listado de todos los usuarios.
routerUsers.get("/", usersControllers_1.getUsers);
//GET /users/:id => Obtener el detalle de un usuario específico.
routerUsers.get("/:id", usersControllers_1.getUserById); //<-- No sé si llamarlo getUsersById
//POST /users/register => Registro de un nuevo usuario.
routerUsers.post("/register", usersControllers_1.createUserRegistration);
//POST /users/login => Login del usuario a la aplicación.
routerUsers.post("/login", usersControllers_1.createUserLogin);
//TODO- DEMO ANDA
// const router: Router = Router();
// router.post("/users", createUser)
// router.get("/users", auth, getUsers)
// router.delete("/users", deleteUser)
exports.default = routerUsers;
