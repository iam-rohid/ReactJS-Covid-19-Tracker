import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData, fetchCountryData } from "./api";
import "./App.css";

class App extends Component {
    state = {
        data: {},
        countryData: {},
        selectedCountry: "Global",
    };

    async componentDidMount() {
        const fetchedData = await fetchData();
        if (fetchedData) {
            this.setState({ data: fetchedData });
        }
    }

    handleCountryChange = async (country) => {
        if (country !== "Global") {
            const data = await fetchCountryData(country);
            this.setState({ selectedCountry: country, countryData: data });
        } else {
            this.setState({ selectedCountry: country });
        }
    };

    render() {
        const { data, selectedCountry, countryData } = this.state;
        return (
            <div id="App" className="main-layout">
                <SideBar />
                <div className="wrapper">
                    {/* <CountryPicker handleCountryChange={this.handleCountryChange} /> */}
                    <Cards data={selectedCountry === "Global" ? data : countryData} />
                    <Chart countryData={countryData} countryName={selectedCountry} />
                </div>
            </div>
        );
    }
}

export default App;
