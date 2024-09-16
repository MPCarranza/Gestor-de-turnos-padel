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
exports.putCancelledStatus = exports.postNewAppointment = exports.getAppointmentDetail = exports.getAppointmentList = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAppointmentList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentsService_1.getAppointmentsService)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: "Los turnos no fueron encontrados", error });
    }
});
exports.getAppointmentList = getAppointmentList;
const getAppointmentDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentsService_1.getAppointmentByIdService)(Number(id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ message: "El turno no fue encontrado", error });
    }
});
exports.getAppointmentDetail = getAppointmentDetail;
const postNewAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId, status } = req.body;
    try {
        const newAppointment = yield (0, appointmentsService_1.scheduleNewAppointmentService)({ date, time, userId, status });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ message: "Error al programar el turno", error });
    }
});
exports.postNewAppointment = postNewAppointment;
const putCancelledStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cancelAppointment = yield (0, appointmentsService_1.cancelAppointmentService)(Number(id));
        res.status(200).json(cancelAppointment);
        console.log("Turno cancelado con éxito");
    }
    catch (error) {
        res.status(404).json({ message: "No se pudo cancelar el turno", error });
    }
});
exports.putCancelledStatus = putCancelledStatus;
