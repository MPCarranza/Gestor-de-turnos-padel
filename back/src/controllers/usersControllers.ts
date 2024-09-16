import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUsersService, loginUserService} from "../services/usersService";
import CredentialsDto from "../dto/CredentialsDto";
import { User } from "../entities/User";



export const getUsers = async(req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error})
    }
    
}

export const getUserById = async(req: Request, res: Response) => {    
    try {
        const { id } = req.params
        const user: User = await getUserByIdService(Number(id))
        res.status(200).json(user);        
    } catch (error: any) {
           res.status(404).json({ message: "Usuario no encontrado"})
        }
}

export const createUserRegistration = async(req: Request, res: Response) => {
    //Vamos a tomar los datos del usuario del body de la request
    const {name, email, birthdate, nDni, username, password} = req.body;

    try {
        const newUser: User = await createUserService({name, email, birthdate, nDni, username, password});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el usuario"})
    }  
}

export const createUserLogin = async(req: Request, res: Response) => {
    try {
        const {username, password}: CredentialsDto = req.body;
        const userExist = await loginUserService({
            username, password
    })
      if(userExist) res.status(200).json(userExist)
} catch (error) {
    res.status(400).json({ message: "Credenciales incorrectas"})
}
};

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