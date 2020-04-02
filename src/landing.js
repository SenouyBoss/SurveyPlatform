import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
/*import {View, Text, Button, Style} from Component;*/
import './App.css';
import logo from "./logo.png";

class App extends Component{


    render(){
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
              
              <h1><br></br></h1>
              
          
                <button className="landing" variant="success" size="lg" block> تركيب استمارة </button>
                <h2></h2>
                <button className="landing1"  variant="success" size="lg" block> ملئ إستمارة </button>
            </div>
            </div>
        )
    }
    
}


export default App;