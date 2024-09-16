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
exports.loginUserService = exports.createUserService = exports.getUserByIdService = exports.getUsersService = void 0;
const credentialsService_1 = require("./credentialsService");
const data_source_1 = require("../config/data-source");
// let users: IUser[] = [{
//    id:1,
//    name: "Jorge",
//    email: "j@gmail.com",
//    birthdate: "13 feb",
//    nDni: "37734901",
//    credentialsId: 5
// }
// ]
// let id:number = 2;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find();
    return users;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield data_source_1.UserModel.findOne({
        where: {
            id
        }, relations: { appointment: true
        }
    });
    if (!foundUser)
        throw Error("Usuario inexistente");
    return foundUser;
});
exports.getUserByIdService = getUserByIdService;
// export const getAppointmentByIdService = async(appointmentID: number): Promise<Appointment> => {
//    const appointmentById: Appointment | null = await AppointmentModel.findOneBy({
//       id: appointmentID   
//    })
//    if (!appointmentById) throw Error ("Turno inexistente")
//       return appointmentById;
// }
const createUserService = (createUserDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield data_source_1.UserModel.create(createUserDTO);
    yield data_source_1.UserModel.save(newUser);
    const newCredential = yield (0, credentialsService_1.createCredentialsService)({
        username: createUserDTO.username,
        password: createUserDTO.password
    });
    newUser.credential = newCredential;
    yield data_source_1.UserModel.save(newUser);
    return newUser;
});
exports.createUserService = createUserService;
// export const findUserByCredentialId = async (credentialId: number): Promise<user | null> => {
//    const user: User | null = await UserModel.findOneBy({ credential: {id: credentialId}})
//    return user;
// }
const loginUserService = (credentialDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const cred = yield (0, credentialsService_1.validateCredentialsService)(credentialDTO);
    if (yield data_source_1.UserModel.findOneBy({ credential: cred })) {
        cred.login = true;
        const loginResult = {
            login: cred.login,
            user: cred.user
        };
        yield data_source_1.CredentialModel.save(cred);
        return loginResult;
    }
    throw new Error("Error al loguearse");
});
exports.loginUserService = loginUserService;
// export const deleteUserService = async(id: number,): Promise<void> => {
//    users = users.filter((user: IUser) => {
//       return user.id !== id
//    })
// }
