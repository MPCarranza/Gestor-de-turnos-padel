import { CredentialModel } from '../config/data-source';
import CredentialsDto from '../dto/CredentialsDto';
import Credential from '../entities/Credential';


export const createCredentialsService = async (credentialsDTO: CredentialsDto): Promise<Credential> => {
    const newCredential: Credential = await CredentialModel.create(credentialsDTO);
    newCredential.login = false;
    await CredentialModel.save(newCredential);
    return newCredential;
    
}
// Función de validación de credenciales: verifica si el username existe y si el password es correcto
export const validateCredentialsService = async (credentialsDTO: CredentialsDto): Promise<Credential> => {
    const credentialUserName = await CredentialModel.findOne({
        where: {
            username: credentialsDTO.username,
        },
        relations: {
            user: true
        }
    });

    if (credentialUserName.password && credentialUserName.password === credentialsDTO.password) {
        return credentialUserName;
    }
    throw Error ("Credenciales no encontradas")   
}
