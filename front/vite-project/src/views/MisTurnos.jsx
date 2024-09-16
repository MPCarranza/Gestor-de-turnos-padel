import NavBar from "../components/NavBar";
import CardList from "../components/CardList";
import styles from "./MisTurnos.module.css"

const MisTurnos = () => {

    return (
        <div className={styles.MisTurnos}>  
            <h1>Mis turnos</h1>
            <CardList/>
        </div>
    )

   
}

export default MisTurnos;