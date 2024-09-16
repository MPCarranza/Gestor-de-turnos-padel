import { useState, useEffect } from "react";
import axios from "axios";
import loadingBall from "../../assets/loadingBall.gif"
import styles from "./Register.module.css"
import { validateRegister } from "../../helpers/validateRegister";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: ""
  })

    useEffect(() => {
    const errors = validateRegister(userData);
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


    axios.post("http://localhost:3001/users/register", userData)
      .then(response => {
        console.log(response.data);
        setTimeout(() => {
          setLoading(false);
          alert("Te has registrado correctamente")
          navigate('/users/login');
        }, 2000);
      }) 

      .catch(error => {
        console.error(error);
        alert("Hubo un error en el registro. Por favor intentalo de nuevo.");
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
          <h2>FORMULARIO DE REGISTRO</h2>
          
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
          <div className={styles.errorsEspacio}>{errors.name && <span className={styles.errors}>{errors.name}</span>}</div>
          
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          <div className={styles.errorsEspacio}>{errors.email && <span className={styles.errors}>{errors.email}</span>}</div>
          
          <label>Fecha de nacimiento</label>
          <input
            type="date"
            name="birthdate"
            onChange={handleChange}
            value={userData.birthdate}
          />
          <div className={styles.errorsEspacio}>{errors.birthdate && <span className={styles.errors}>{errors.birthdate}</span>}</div>

          <label>Documento</label>
          <input
            type="text"
            name="nDni"
            onChange={handleChange}
            value={userData.nDni}
          />
          <div className={styles.errorsEspacio}>{errors.nDni && <span className={styles.errors}>{errors.nDni}</span>}</div>
          
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
          
          <button className= "button" type="submit">Registrarse</button>
        </form>
        </div>
        </div>
      )}
    </div>
  );
};

export default Register;
