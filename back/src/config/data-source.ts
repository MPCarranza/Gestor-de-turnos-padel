import { DataSource } from "typeorm"
import { User } from "../entities/User"
import Credential from "../entities/Credential"
import { Appointment } from "../entities/Appointment"

export const AppDataSource = new DataSource({
    type: "postgres", 
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "0303456",
    database: "appappointments",
    dropSchema: true,  //Con esto los datos se vacían y es útil cuando queremos compatibilidad con todos los datos que voy modificando
    synchronize: true,
    logging: false, //veo en pantalla o no lo que pasa en sql
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})

export const  UserModel = AppDataSource.getRepository(User);
export const CredentialModel = AppDataSource.getRepository(Credential);
export const AppointmentModel = AppDataSource.getRepository(Appointment);