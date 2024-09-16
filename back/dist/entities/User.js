"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Credential_1 = __importDefault(require("./Credential"));
const Appointment_1 = require("./Appointment");
//A esta clase hay que pasarla por un decorador de typescript que es una función que recibe en este caso una clase
// y la convierte en una entidad de typeORM
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)() //typeORM se encarga de que este ID nunca se repita y sea autoincremental
    ,
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 100
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "nDni", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Credential_1.default, (credential) => credential.user) // Cuando es uno a uno solo se declara la relación en la tabla A.
    ,
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Credential_1.default)
], User.prototype, "credential", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Appointment_1.Appointment, (appointment) => appointment.user),
    __metadata("design:type", Array)
], User.prototype, "appointment", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({
        name: "users"
    }) // me va a crear una tabla llamada "user" PERO no es conveniente tenerla. Por esa razón la distinguimos con el nombre "users".
], User);
