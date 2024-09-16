import { Router, Request, Response} from 'express';
import { getAppointmentList , getAppointmentDetail , postNewAppointment , putCancelledStatus } from "../controllers/appointmentController";


const routerAppointment: Router = Router();

//GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
routerAppointment.get("/", getAppointmentList)

//GET /appointment => Obtener el detalle de un turno específico.
routerAppointment.get("/:id", getAppointmentDetail)

//POST /appointment/schedule => Agendar un nuevo turno.
routerAppointment.post("/schedule", postNewAppointment)

//PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
routerAppointment.put("/cancel/:id", putCancelledStatus)


export default routerAppointment;