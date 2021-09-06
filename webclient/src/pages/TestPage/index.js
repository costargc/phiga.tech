import React, { Component } from "react";
import "./index.css";
import logo from '../../logo.svg';


class TestPage extends Component {

    render() {
        return (
            <main className="App">
                <header className="App-header">
                    {/* <div className="wrapper"> */}
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    {/* <img></img> */}
                    <div>
                        <p className="text">...this is a test</p>
                    </div>

                    {/* </div> */}

                </header>
            </main>

        );
    }
}

export default TestPage;