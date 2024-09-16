import { Column, Entity, JoinColumn, OneToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import Credential from "./Credential"
import { Appointment } from "./Appointment"


//A esta clase hay que pasarla por un decorador de typescript que es una función que recibe en este caso una clase
// y la convierte en una entidad de typeORM
@Entity({
    name: "users"
}) // me va a crear una tabla llamada "user" PERO no es conveniente tenerla. Por esa razón la distinguimos con el nombre "users".
export class User {
    @PrimaryGeneratedColumn() //typeORM se encarga de que este ID nunca se repita y sea autoincremental
    id:number

    @Column({
        length: 100
    })
    name:string //VARCHAR (100)

    @Column()
    email:string

    @Column()
    birthdate: string

    @Column()
    nDni: string

    @OneToOne(() => Credential, (credential) => credential.user) // Cuando es uno a uno solo se declara la relación en la tabla A.
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointment: Appointment[]

}


