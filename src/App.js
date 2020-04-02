import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import logo from "./logo.png";
import { Link} from 'react-router-dom';

class App extends Component{

    render(){
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
             <h1><br/></h1>
                <button className="landing" variant="success" size="lg" block><Link to="/createSurvey"> تركيب استمارة </Link></button>
                <h2></h2>
                <button className="landing1"  variant="success" size="lg" block><Link to="/loadSurvey"> ملئ إستمارة </Link></button>
        </div>
        </div>
        )
    }
    
}


export default App;