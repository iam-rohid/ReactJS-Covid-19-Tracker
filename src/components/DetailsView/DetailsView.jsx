import React, { Component } from "react";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import moduleName, { fetchData } from "../../api";
import "./DetailsView.css";
export default class DetailsView extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
        };
    }

    async componentDidMount() {
        var fetchedData = {};
        if (this.props.country === "Global") {
            fetchedData = await fetchData();
        } else {
            fetchedData = await fetchData(this.props.country);
        }
        if (fetchedData) {
            this.setState({ data: fetchedData });
        }
    }

    render() {
        const { data, countryData } = this.state;
        return (
            <div className="DetailsViewWrapper">
                <Cards data={data} />
                <Chart countryData={data} countryName={this.props.country} />
            </div>
        );
    }
}
