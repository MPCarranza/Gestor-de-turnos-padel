import React from "react";
import styled from "styled-components";
import styles from "./BurguerButton.module.css"

const BurguerButton = (props) => {
    return (
        <div onClick={props.handleClick} className={`${styles.navIcon} ${props.clicked ? styles.open : ""}`}>
     
            <span></span>
            <span></span>
            <span></span>

        </div>
    )
}

export default BurguerButton;