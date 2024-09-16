import UserDto from "../dto/UserDto";
import CredentialsDto from "../dto/CredentialsDto";
import { createCredentialsService, validateCredentialsService } from "./credentialsService";
import { CredentialModel, UserModel } from "../config/data-source";
import { User } from "../entities/User";
import Credential from "../entities/Credential";

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

export const getUsersService = async(): Promise<User[]> => {
   const users: User[] = await UserModel.find();
   return users;
}

export const getUserByIdService = async(id: number): Promise<User> => {
   const foundUser: User | undefined = await UserModel.findOne({
      where: {
         id
      }, relations: { appointment: true
      }
   })
   if (!foundUser) throw Error ("Usuario inexistente")
      return foundUser;
}

// export const getAppointmentByIdService = async(appointmentID: number): Promise<Appointment> => {
//    const appointmentById: Appointment | null = await AppointmentModel.findOneBy({
//       id: appointmentID   
//    })
//    if (!appointmentById) throw Error ("Turno inexistente")
//       return appointmentById;
// }

export const createUserService = async(createUserDTO: UserDto) => {

   const newUser: User = await UserModel.create(createUserDTO);
   await UserModel.save(newUser)

   const newCredential = await createCredentialsService({
      username: createUserDTO.username,
      password: createUserDTO.password
});
   newUser.credential = newCredential;
   await UserModel.save(newUser);

   return newUser;
}

// export const findUserByCredentialId = async (credentialId: number): Promise<user | null> => {
//    const user: User | null = await UserModel.findOneBy({ credential: {id: credentialId}})
//    return user;
// }

export const loginUserService = async (credentialDTO: CredentialsDto) => {
   const cred: Credential = await validateCredentialsService(credentialDTO)
   if (await UserModel.findOneBy({credential:cred })){
      cred.login = true;
      const loginResult = {
         login: cred.login,
         user: cred.user
      }
      await CredentialModel.save(cred)
      return loginResult;
   }
   throw new Error ("Error al loguearse")
};



// export const deleteUserService = async(id: number,): Promise<void> => {
//    users = users.filter((user: IUser) => {
//       return user.id !== id
//    })
// }