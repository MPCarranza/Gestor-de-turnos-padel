import { Router, Request, Response} from 'express';
// DEMO: import { createUser, getUsers, deleteUser } from "../controllers/usersControllers";
import { getUsers , getUserById , createUserRegistration , createUserLogin } from "../controllers/usersControllers";
import auth from "../middlewares/auth"

const routerUsers: Router = Router();

//GET /users => Obtener el listado de todos los usuarios.
routerUsers.get("/", getUsers)

//GET /users/:id => Obtener el detalle de un usuario específico.
routerUsers.get("/:id", getUserById) //<-- No sé si llamarlo getUsersById

//POST /users/register => Registro de un nuevo usuario.
routerUsers.post("/register", createUserRegistration)

//POST /users/login => Login del usuario a la aplicación.
routerUsers.post("/login", createUserLogin)


//TODO- DEMO ANDA
// const router: Router = Router();

// router.post("/users", createUser)

// router.get("/users", auth, getUsers)

// router.delete("/users", deleteUser)

export default routerUsers;