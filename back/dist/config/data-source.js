"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = exports.CredentialModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credential_1 = __importDefault(require("../entities/Credential"));
const Appointment_1 = require("../entities/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "0303456",
    database: "appappointments",
    dropSchema: true, //Con esto los datos se vacían y es útil cuando queremos compatibilidad con todos los datos que voy modificando
    synchronize: true,
    logging: false, //veo en pantalla o no lo que pasa en sql
    entities: [User_1.User, Credential_1.default, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.CredentialModel = exports.AppDataSource.getRepository(Credential_1.default);
exports.AppointmentModel = exports.AppDataSource.getRepository(Appointment_1.Appointment);
