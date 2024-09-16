import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity ({
    name: "credentials"
})
class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column()
    password: string

    @Column()
    login: boolean
    
    @OneToOne(() => User, (user) => user.credential)
    user: User
}

export default Credential;