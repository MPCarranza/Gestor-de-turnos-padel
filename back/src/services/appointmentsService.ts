import { AppointmentModel, UserModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
import AppointmentsDto from "../dto/AppointmentsDto";
import { User } from "../entities/User";


export const getAppointmentsService = async(): Promise<Appointment[]> => {
    const appointments: Appointment[] = await AppointmentModel.find();
    return appointments;
 }


 export const getAppointmentByIdService = async(appointmentID: number): Promise<Appointment> => {
    const appointmentById: Appointment | null = await AppointmentModel.findOneBy({
       id: appointmentID   
    })
    if (!appointmentById) throw Error ("Turno inexistente")
       return appointmentById;
 }

 export const scheduleNewAppointmentService = async(AppointmentDto: AppointmentsDto): Promise<Appointment> => {
        const newAppointment: Appointment = await AppointmentModel.create(AppointmentDto);
        await AppointmentModel.save(newAppointment)
        
        const user: User | null = await UserModel.findOneBy({
                id: AppointmentDto.userId
        })
        if (!user) throw Error ("Usuario inexistente")
        newAppointment.user = user;

        await AppointmentModel.save(newAppointment);
        return newAppointment;
        
    }

export const cancelAppointmentService = async (id : number): Promise<void> => {
    const appointment = await AppointmentModel.findOneBy({
            id
    });

    if (!appointment) {
        throw new Error(`No se encontró el turno solicitado`)
    }
    
    appointment.status = "Cancelled";
    await AppointmentModel.save(appointment);
}