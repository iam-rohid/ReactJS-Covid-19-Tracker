import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";

export class Chart extends Component {
    constructor() {
        super();
        this.state = {
            dailyData: [],
        };
        this.LineChart = this.LineChart.bind(this);
    }
    async componentDidMount() {
        const data = await fetchDailyData();
        if (data) {
            this.setState({ dailyData: data });
        }
    }

    LineChart() {
        const { dailyData } = this.state;
        if (dailyData.length && this.props.countryName === "Global") {
            return (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [
                            {
                                data: dailyData.map(({ confirmed }) => confirmed),
                                label: "Confirmed",
                                borderColor: "rgb(100,100,255)",
                                backgroundColor: "rgba(100,100,255,0.2)",
                                fill: true,
                            },
                            {
                                data: dailyData.map(({ deaths }) => deaths),
                                label: "Deaths",
                                borderColor: "rgb(255,50,50)",
                                backgroundColor: "rgba(255,50,50,0.2)",
                                fill: true,
                            },
                        ],
                    }}
                />
            );
        }
    }

    BarChart() {
        if (this.props.countryName !== "Global") {
            const {
                countryData: { confirmed, recovered, deaths },
                countryName,
            } = this.props;
            return (
                <Bar
                    data={{
                        labels: ["Confirmed", "Recovered", "Deaths"],
                        datasets: [
                            {
                                label: "People",
                                backgroundColor: ["rgb(100,100,255)", "rgb(50,240,50)", "rgb(255,50,50)"],
                                data: [confirmed.value, recovered.value, deaths.value],
                            },
                        ],
                    }}
                    options={{
                        legend: false,
                        title: {
                            display: true,
                            Text: `Current state in ${countryName}`,
                        },
                    }}
                />
            );
        }
    }

    render() {
        return (
            <div className={styles.container}>
                {this.LineChart()}
                {this.BarChart()}
            </div>
        );
    }
}

export default Chart;
