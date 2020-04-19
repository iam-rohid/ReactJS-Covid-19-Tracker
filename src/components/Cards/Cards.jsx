import React from "react";
import Card from "./Card/Card";
import "./Cards.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    return (
        <div className="CardsWrapper">
            <Card data={confirmed} lastUpdate={lastUpdate} CardTitle={"Confirmed"}>
                <p>Number of active cases of COVID-19</p>
            </Card>
            <Card data={recovered} lastUpdate={lastUpdate} CardTitle={"Recovered"}>
                <p>Number of recoveries from COVID-19</p>
            </Card>
            <Card data={deaths} lastUpdate={lastUpdate} CardTitle={"Deaths"}>
                <p>Number of deaths caused by COVID-19</p>
            </Card>
        </div>
    );
};

export default Cards;
