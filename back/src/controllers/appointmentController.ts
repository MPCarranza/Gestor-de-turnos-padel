import { Request, Response } from "express";
import { Appointment } from "../entities/Appointment";
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleNewAppointmentService } from "../services/appointmentsService";


export const getAppointmentList = async(req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentsService();
        res.status(200).json(appointments)
    } catch (error) {
        res.status(404).json({ message: "Los turnos no fueron encontrados", error})
    }
}

export const getAppointmentDetail = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const appointment: Appointment = await getAppointmentByIdService(Number(id))
        res.status(200).json(appointment);        
    } catch (error) {
           res.status(404).json({ message: "El turno no fue encontrado", error})
        }
}

export const postNewAppointment = async(req: Request, res: Response) => {
    const {date, time, userId, status} = req.body;
    try {
        const newAppointment: Appointment = await scheduleNewAppointmentService({date, time, userId, status});
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json({ message: "Error al programar el turno", error})
    }  
}

export const putCancelledStatus = async(req: Request, res: Response) => {
    try {
        const { id } = req.params
        const cancelAppointment = await cancelAppointmentService(Number(id))
        res.status(200).json(cancelAppointment);
        console.log("Turno cancelado con éxito")     
    } catch (error) {
           res.status(404).json({ message: "No se pudo cancelar el turno", error})
        }
}