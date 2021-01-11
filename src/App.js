import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import ButtonsComponent from "./components/ButtonsComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        }; 
    

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <ButtonsComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;