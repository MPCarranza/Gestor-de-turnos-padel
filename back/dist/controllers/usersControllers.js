"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserLogin = exports.createUserRegistration = exports.getUserById = exports.getUsers = void 0;
const usersService_1 = require("../services/usersService");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, usersService_1.getUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, usersService_1.getUserByIdService)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
});
exports.getUserById = getUserById;
const createUserRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Vamos a tomar los datos del usuario del body de la request
    const { name, email, birthdate, nDni, username, password } = req.body;
    try {
        const newUser = yield (0, usersService_1.createUserService)({ name, email, birthdate, nDni, username, password });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ message: "Error al crear el usuario" });
    }
});
exports.createUserRegistration = createUserRegistration;
const createUserLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const userExist = yield (0, usersService_1.loginUserService)({
            username, password
        });
        if (userExist)
            res.status(200).json(userExist);
    }
    catch (error) {
        res.status(400).json({ message: "Credenciales incorrectas" });
    }
});
exports.createUserLogin = createUserLogin;
//TODO DEMO QUE ANDA
// export const createUser = async(req: Request, res:Response) => {
//     const {name, email, active} = req.body;
//     const newUser: IUser = await createUserService ({name, email, active})
//     res.status(201).json(newUser)
//  }
// export const getUsers = async(req: Request, res: Response) => {
//     const users: IUser[] = await getUsersService();
//     res.status(200).json(users)
// }
// export const deleteUser = async(req: Request, res: Response) => {
//     const {id} = req.body
//     await deleteUserService(id)
//     res.status(200).json({message: "Eliminado correctamente"})
// }
