import React from 'react'
import styles from "../styles/Home.module.css";

export const Menu = () => {
  return (
    <div className={styles.contenedor} >
        <ul className={styles.menuI}>
            <li className={styles.Item1}><a href="#">Inicio</a></li>
            <li className={styles.Item1}><a href="#">Opcion 1</a></li>
            <li className={styles.Item1}><a href="#">Opcion 2</a></li>
            <li className={styles.Item1}><a href="#">Opcion 3</a></li>
            <li className={styles.Item1}><a href="#">Opcion 4</a></li>  
        </ul>    
    </div>
  )
}
