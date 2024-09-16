import styles from "./Card.module.css"
import axios from "axios";
import { useDispatch } from "react-redux";
import { cancelAppointmentAction } from "../redux/reducer";
import { useEffect, useState } from "react";

const Card = (props) => {
    const dispatch = useDispatch();
    const {date, time, status, id} = props.appointmentContent
    const [localStatus, setLocalStatus] = useState(status);

    const cancelAppointment = async () => {
        try {
            const response = await axios.put(`http://localhost:3001/appointments/cancel/${id}`)
            if(response.status === 200) {
                dispatch(cancelAppointmentAction(id));
                setLocalStatus("Cancelled"); //Actualiza el estado local después de la respuesta del back
            }
        } catch (error) {
            console.log("Ocurrió un error en el servicio", error)
        }
    };

    
    // Utiliza useEffect para re-renderizar cuando el estado local cambie.
    useEffect(() => {
        setLocalStatus(status)
    }, [status]);

    const statusClass = localStatus === "Active" ? styles.active : styles.cancelled;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardAppointment}>
            <h3><label>Fecha: </label>{date}</h3>
            <h3><label>Hora: </label>{time}</h3>
            <h3 className={`${styles.status} ${statusClass}`}>{localStatus.toUpperCase()}</h3>
            <button disabled = {localStatus === "Cancelled"} onClick = {cancelAppointment} //<-{cancelAppointment()} <-Cambia el estado pero NO en vivo.Si no cuando actualizo.
             className={styles.cancelButton}>Cancelar</button>
            
            </div>
        </div>
    )

}

export default Card;