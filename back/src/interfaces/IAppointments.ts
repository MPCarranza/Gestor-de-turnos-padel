interface IAppointment {
    id: number,                
    date: Date,          
    time: string,
    userId: number,
    status: AppointmentStatus

}

enum AppointmentStatus {
    ACTIVE = "active",
    CANCELLED = "cancelled"
}

export default IAppointment;