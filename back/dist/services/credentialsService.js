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
exports.validateCredentialsService = exports.createCredentialsService = void 0;
const data_source_1 = require("../config/data-source");
const createCredentialsService = (credentialsDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield data_source_1.CredentialModel.create(credentialsDTO);
    newCredential.login = false;
    yield data_source_1.CredentialModel.save(newCredential);
    return newCredential;
});
exports.createCredentialsService = createCredentialsService;
// Función de validación de credenciales: verifica si el username existe y si el password es correcto
const validateCredentialsService = (credentialsDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const credentialUserName = yield data_source_1.CredentialModel.findOne({
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
    throw Error("Credenciales no encontradas");
});
exports.validateCredentialsService = validateCredentialsService;
