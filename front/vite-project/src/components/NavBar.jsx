import laRedondita from "../assets/laRedondita.png"
import BurguerButton from "./BurguerButton";
import React, {useState} from 'react';
import styles from "./NavBar.module.css"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const NavBar = () => {
    
    const userData = useSelector((state) => state.userActive);
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {

        setClicked(!clicked)

    }


    return (
    <nav className={styles.NavContainer}>
            <Link to = "/"><img className={styles.logo} src={laRedondita}/></Link>

            {!userData.name ? (
                <nav className={`${styles.links} ${clicked ? styles.active : ''}`}>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="/users/register">Registrarme</Link>
                <Link onClick={handleClick} to="/users/login">Ingresar</Link>
               </nav>
            ) : (
                
                <nav className={`${styles.links} ${clicked ? styles.active : ''}`}>
                <h1>Te damos la bienvenida {userData.name}</h1>
                <Link onClick={handleClick} to="/">Home</Link>
                <Link onClick={handleClick} to="/appointments">Mis Turnos</Link>
                <Link onClick={() => {userData.setUser({name: "",})}} to="/">Cerrar sesión</Link>
               </nav>
                
            )}
                   

            <div className={styles.Burguer}>
                <BurguerButton clicked= {clicked} handleClick={handleClick}/>
            </div>
            <div className={`${styles.BgDiv} ${clicked ? styles.active : ''}`}></div>
    </nav>
        );
};              
    


export default NavBar;