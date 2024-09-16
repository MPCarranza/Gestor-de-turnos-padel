"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const routerAppointment = (0, express_1.Router)();
//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
routerAppointment.get("/", appointmentController_1.getAppointmentList);
//GET /appointment => Obtener el detalle de un turno específico.
routerAppointment.get("/:id", appointmentController_1.getAppointmentDetail);
//POST /appointment/schedule => Agendar un nuevo turno.
routerAppointment.post("/schedule", appointmentController_1.postNewAppointment);
//PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
routerAppointment.put("/cancel/:id", appointmentController_1.putCancelledStatus);
exports.default = routerAppointment;
