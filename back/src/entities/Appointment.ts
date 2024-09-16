import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import Credential from "./Credential"
import { User } from "./User"
import { Status } from "../dto/AppointmentsDto"


@Entity({
    name: "appointments"
}) 
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date:Date

    @Column()
    time:string

    @Column({
        default: "Active"
    })
    status: string

    @ManyToOne(() => User, (user) => user.appointment)
    user: User

}