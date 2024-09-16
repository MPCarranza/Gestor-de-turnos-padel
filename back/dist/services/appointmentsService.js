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
exports.cancelAppointmentService = exports.scheduleNewAppointmentService = exports.getAppointmentByIdService = exports.getAppointmentsService = void 0;
const data_source_1 = require("../config/data-source");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppointmentModel.find();
    return appointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentByIdService = (appointmentID) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentById = yield data_source_1.AppointmentModel.findOneBy({
        id: appointmentID
    });
    if (!appointmentById)
        throw Error("Turno inexistente");
    return appointmentById;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const scheduleNewAppointmentService = (AppointmentDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = yield data_source_1.AppointmentModel.create(AppointmentDto);
    yield data_source_1.AppointmentModel.save(newAppointment);
    const user = yield data_source_1.UserModel.findOneBy({
        id: AppointmentDto.userId
    });
    if (!user)
        throw Error("Usuario inexistente");
    newAppointment.user = user;
    yield data_source_1.AppointmentModel.save(newAppointment);
    return newAppointment;
});
exports.scheduleNewAppointmentService = scheduleNewAppointmentService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModel.findOneBy({
        id
    });
    if (!appointment) {
        throw new Error(`No se encontró el turno solicitado`);
    }
    appointment.status = "Cancelled";
    yield data_source_1.AppointmentModel.save(appointment);
});
exports.cancelAppointmentService = cancelAppointmentService;
