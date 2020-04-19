import React, { Component } from "react";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";
class CountryPicker extends Component {
    constructor() {
        super();
        this.state = {
            countries: [],
        };
    }
    async componentDidMount() {
        const countriesData = await fetchCountries();
        if (countriesData) {
            this.setState({ countries: countriesData });
        }
    }
    render() {
        const { countries } = this.state;
        return (
            <form className={styles.Container}>
                <h2>Select Country</h2>
                <select
                    className={styles.Picker}
                    onChange={(e) => {
                        this.props.handleCountryChange(e.target.value);
                    }}
                >
                    <option value="Global">Global</option>
                    {countries.length > 0 ? (
                        countries.map(({ name }, key) => {
                            return (
                                <option key={key} value={name}>
                                    {name}
                                </option>
                            );
                        })
                    ) : (
                        <option>Loading</option>
                    )}
                </select>
            </form>
        );
    }
}

export default CountryPicker;
