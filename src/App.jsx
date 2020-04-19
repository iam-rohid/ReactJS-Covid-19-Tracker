import React, { Component } from "react";
import SideBar from "./components/SideBar/SideBar";
import DetailsView from "./components/DetailsView/DetailsView";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div id="App" className="main-layout">
                <SideBar />
                <div className="wrapper">
                    <DetailsView country="Global" />
                </div>
            </div>
        );
    }
}

export default App;
