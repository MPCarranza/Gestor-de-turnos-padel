export enum Status {
    ACTIVE = "Active",
    CANCELLED = "Cancelled"
}

interface AppointmentsDto {
  
    date:Date,
    time:string,
    status: Status,
    userId: number
}

export default AppointmentsDto;