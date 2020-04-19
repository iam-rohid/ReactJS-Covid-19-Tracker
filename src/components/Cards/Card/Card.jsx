import React from "react";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Card.module.css";

const Card = ({ data, lastUpdate, CardTitle, children }) => {
    return (
        <div
            className={styles.Card}
            style={{
                boxShadow: `${CardTitle === "Confirmed" ? "0 30px 30px -25px rgba(100,100,255,0.2)" : CardTitle === "Recovered" ? "0 30px 30px -25px rgba(50,240,50,0.2)" : CardTitle === "Deaths" ? "0 30px 30px -25px rgba(255,50,50,0.2)" : null}`,
            }}
        >
            <h2
                className={styles.CardTitle}
                style={{
                    color: `${CardTitle === "Confirmed" ? "rgb(100,100,255)" : CardTitle === "Recovered" ? "rgb(50,240,50)" : CardTitle === "Deaths" ? "rgb(255,50,50)" : null}`,
                }}
            >
                {CardTitle}
            </h2>
            {data ? (
                <CountUp className={styles.CardValue} start={0} end={data.value} duration={2.5} separator="," />
            ) : (
                <span className={styles.CardValue} style={{ color: "rgb(200,200,200" }}>
                    Loading
                </span>
            )}
            {lastUpdate ? <p style={{ color: "#555", fontSize: "1rem" }}>{new Date(lastUpdate).toDateString()}</p> : <p style={{ color: "rgb(200,200,200", fontSize: "1rem" }}>Loading</p>}
            {children}
            <div
                className={styles.underline}
                style={{
                    backgroundColor: `${CardTitle === "Confirmed" ? "rgb(100,100,255)" : CardTitle === "Recovered" ? "rgb(50,240,50)" : CardTitle === "Deaths" ? "rgb(255,50,50)" : null}`,
                }}
            />
        </div>
    );
};

export default Card;
