import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
    return (
        <div className={styles.Navbar}>
            <h1 className={styles.NavLogo}>COVID-19 Tracker</h1>
        </div>
    );
}

export default Navbar;
