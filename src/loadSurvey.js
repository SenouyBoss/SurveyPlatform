import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
/*import {View, Text, Button, Style} from Component;*/
import './App.css';
import logo from "./logo.png";
import {Link} from 'react-router-dom';

class loadSurvey extends Component{


    render(){
        return (
            <div className="App">
            <div className="App-header">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo" /></Link>
              
              <h1><br></br></h1>
              
          
                <button className="landing" variant="success" size="lg" block><Link to="/workSurvey">   الشغل </Link></button>
                <h2></h2>
                <button className="landing1"  variant="success" size="lg" block><Link to="/familySurvey">  الأسرة</Link></button>
                <h2></h2>
                <button className="landing1"  variant="success" size="lg" block><Link to="/newSurvey">  إحصاء جديد </Link></button>
            
            </div>
            </div>
        )
    }
    
}


export default loadSurvey;