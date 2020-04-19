import React, { Component } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import "./Chart.css";

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
                    legend={{
                        labels: {
                            display: true,
                            fontColor: "#fff",
                        },
                    }}
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        defaultFontColor: "#fff",
                        datasets: [
                            {
                                data: dailyData.map(({ confirmed }) => confirmed),
                                label: "Confirmed",
                                borderColor: "rgb(100,100,255)",
                                borderWidth: 2,
                                backgroundColor: "rgba(100,100,255,0.2)",
                                fill: true,
                                pointRadius: 2,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderWidth: 3,
                                rotation: 0,
                                lineTension: 0,
                            },
                            {
                                data: dailyData.map(({ deaths }) => deaths),
                                label: "Deaths",
                                borderColor: "rgb(255,50,50)",
                                backgroundColor: "rgba(255,50,50,0.2)",
                                fill: true,
                                pointRadius: 2,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderWidth: 3,
                                rotation: 0,
                                lineTension: 0,
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
            <div className="ChartWrapper">
                <div className="Chart">
                    {this.LineChart()}
                    {this.BarChart()}
                </div>
            </div>
        );
    }
}

export default Chart;
