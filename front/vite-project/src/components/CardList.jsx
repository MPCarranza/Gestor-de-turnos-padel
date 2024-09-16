import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styles from "./CardList.module.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUserAppointments, createAppointment } from "../redux/reducer";
import { validateAppointment } from "../helpers/validateAppointments";

const  CardList = () => {
    //Creo un estado con un arreglo iniciado en cero y una función set
    const [appointment, setAppointment] = useState([])
    const [userInput, setUserInput] = useState ({date: "", time:""});
    const userData = useSelector((state) => state.userActive);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [errors, setErrors] = useState({});



    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInput({ ...userInput, [name]: value });
    };

 
    const handleSubmit = async (event) => {
        event.preventDefault();

//Aquí llamo a mi validación de errores para hacer el código más modular y limpio, evitando repetirlo.
const validationErrors = validateAppointment(userInput.date, userInput.time);
if (Object.keys(validationErrors).length === 0) {
    try {
        const response = await axios.post("http://localhost:3001/appointments/schedule", {
            ...userInput,
            userId: userData.id
        });
        dispatch(createAppointment(response.data));
        setAppointment([...appointment, response.data]);
        setShowForm(false);
        alert(`Turno creado para la fecha ${userInput.date} a las ${userInput.time}`);
    } catch (error) {
        console.error(error);
        alert("No se pudo crear el turno");
    }
} else {
    setErrors(validationErrors);
}
};
       
    

    //acá quiero hacer la petición para traerme los turnos por id del usuario
    useEffect(() => {
        const fetchData = async () => {
            try {const response = await axios.get(`http://localhost:3001/users/${userData.id}`)
            dispatch(addUserAppointments(response.data.appointment))
            setAppointment(response.data.appointment)
        } catch (error) {
            console.error("Error fetching data: ", error)
        }
      };

        !userData.name ? navigate("/") : fetchData()
    }, [])

    const handleNewAppointmentClick = () => {
        setShowForm(!showForm);
    }
    
    
    return (
        
        <>
        {
        appointment.length === 0 ?
        (<div className={styles.appointmentListContainer}>
            <h3>No tienes turnos disponibles</h3>
        </div>)
        :
        (<div className={styles.appointmentListContainer}>
            {appointment.map((appointment) => { return <Card key = {appointment.id} appointmentContent = {appointment}/>})}
        </div>)
        }
        
        <button className={styles.buttonNuevoTurno} onClick={handleNewAppointmentClick}>{showForm ? 'Ocultar Formulario' : 'Crear Nuevo turno'}</button>
        {showForm && (
            <div className={styles.globalContainer}>
            <div className= {styles.formContainer}>
                 <form onSubmit={handleSubmit}>
                        <h2>COMPLETA LOS DATOS</h2>

                         <div className="formHolder">
                            <label>Fecha</label>
                            <input
                              type="date"
                              name="date"
                              onChange={handleChange}
                              value={userInput.date}
                            />
                            <div className={styles.errorsEspacio}>{errors.date && <span className={styles.errors}>{errors.date}</span>}</div>
           
                            <label>Hora</label>
                            <input
                              type="time"
                              name="time"
                              onChange={handleChange}
                              value={userInput.time}
                            />
                            <div className={styles.errorsEspacio}>{errors.time && <span className={styles.errors}>{errors.time}</span>}</div>
                         </div>      
          
                       <button className= "button" type="submit">Cargar turno</button>
                 </form>
            </div>
            </div>
        )}
        </>
    )
}

export default CardList;