import { useEffect, useState } from "react";
import axios from "axios";
import loadingBall from "../../assets/loadingBall.gif"
import styles from "./Login.module.css"
import { validateLogin } from "../../helpers/validateLogin";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { addUser } from "../../redux/reducer";

const Login = () => {
  const dispatch = useDispatch(); // instancia de la ejecución
  const navigate = useNavigate();

  
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  })

    useEffect(() => {
    const errors = validateLogin(userData);
    setErrors(errors)
  }, [userData])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const [loading, setLoading] =useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true); //indica que la carga del formulario está en proceso


    axios.post("http://localhost:3001/users/login", userData)
      .then(response => {
        dispatch(addUser(response.data.user))//ejecuto la función que espera un payload por parámetro, pero no siempre es obligatorio
        setTimeout(() => {
          setLoading(false);
          alert("Te has logueado correctamente")
          navigate('/');
        }, 2000);
      }) 

      .catch(error => {
        console.error(error);
        alert("Hubo un error en el login. Por favor intentalo de nuevo.");
      });

  };


   return (
    <div>
      {loading ? (
        <div className={styles.loadingContainer}>
          <img src={loadingBall} alt="Cargando..." />
        </div>
      ) : (
        <div className={styles.globalContainer}>
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2>FORMULARIO DE LOGIN</h2>

          <div className="formHolder">
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={userData.username}
          />
          <div className={styles.errorsEspacio}>{errors.username && <span className={styles.errors}>{errors.username}</span>}</div>
           
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
          <div className={styles.errorsEspacio}>{errors.password && <span className={styles.errors}>{errors.password}</span>}</div>
          </div>      
          
          <button className= "button" type="submit">Ingresar</button>
        </form>
        </div>
        </div>
      )}
    </div>
  );
};

export default Login;
