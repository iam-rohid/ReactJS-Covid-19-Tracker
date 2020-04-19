import React from "react";
import CountUp from "react-countup";
import cx from "classnames";
import "./Card.css";

const Card = ({ data, lastUpdate, CardTitle, children }) => {
    return (
        <div className={`Card ${CardTitle}`}>
            <h2 className={`CardTitle ${CardTitle}`}>{CardTitle}</h2>
            {data ? (
                <CountUp className="CardValue" start={0} end={data.value} duration={2.5} separator="," />
            ) : (
                <span className="CardValue" style={{ color: "rgb(200,200,200" }}>
                    Loading
                </span>
            )}
            {lastUpdate ? <p style={{ fontSize: "1rem" }}>{new Date(lastUpdate).toDateString()}</p> : <p style={{ color: "rgb(200,200,200", fontSize: "1rem" }}>Loading</p>}
            {children}
            <div className={`UnderLine ${CardTitle}`} />
        </div>
    );
};

export default Card;
