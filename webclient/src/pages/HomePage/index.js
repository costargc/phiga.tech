import React, { Component } from "react";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class HomePage extends Component {

    render() {
        return (
            <main className="App">
                <header className="App-header">
                    <div className="wrapper">
                        <div className="bcircle1"></div>
                        <div className="bcircle2"></div>
                        <div className="bcircle3"></div>
                        {/* <img src={logo} className="App-logo" alt="logo" /> */}
                        <div>
                            <p className="phytext" >&Phi;</p>
                            <p className="gatechtext">G A . T E C H</p>
                        </div>
                    </div>

                </header>
            </main>

        );
    }
}

export default HomePage;