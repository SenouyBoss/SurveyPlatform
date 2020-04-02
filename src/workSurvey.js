import {Link} from 'react-router-dom';
import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyCreator from "./SurveyCreator";
import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import workjson from "./validators.json";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as SurveyCore from "survey-core";
import * as SurveyPDF from "survey-pdf";
import * as widgets from "surveyjs-widgets";

import "pretty-checkbox/dist/pretty-checkbox.css";
//import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
//require("icheck");

export { MyQuestion } from "./MyQuestion";

Survey.StylesManager.applyTheme("default");

//widgets.icheck(Survey, $);
widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

//widgets.icheck(SurveyCore, $);
widgets.prettycheckbox(SurveyCore);
widgets.select2(SurveyCore, $);
widgets.inputmask(SurveyCore);
widgets.jquerybarrating(SurveyCore, $);
widgets.jqueryuidatepicker(SurveyCore, $);
widgets.nouislider(SurveyCore);
widgets.select2tagbox(SurveyCore, $);
widgets.signaturepad(SurveyCore);
widgets.sortablejs(SurveyCore);
widgets.ckeditor(SurveyCore);
widgets.autocomplete(SurveyCore, $);
widgets.bootstrapslider(SurveyCore);

class familySurvey extends Component {


  onValueChanged(result) {
    console.log("value changed!");
  }

  download = async (model) =>{
    const filename = "survey";
    const json = JSON.stringify(model.data);
    const blob = new Blob([json], {type: 'aplication/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = filename + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  onComplete(result) {
    console.log("Complete! " + result);
    console.log("Survey results: " + JSON.stringify(result));
    //download();
  }
  

  savePDF = model => {
    var surveyPDF = new SurveyPDF.SurveyPDF(workjson);
    surveyPDF.data = model.data;
    surveyPDF.save();
  };

  surveyValidateQuestion(options) {
    var age = options.name == 'panel_member_age';
    if(age){
      var minAge = 1;
      var maxAge = 15;
      if (minAge > age && maxAge < age){
        options.error = "check the age it is not allowed";
      }
    }

  }

  render() {
    var model = new Survey.Model(workjson);
    return (
      <div className="App">
         <div className="App-header">
         <Link to="/">
                <img src={logo} className="App-logo" alt="logo" /></Link>
          <h2>البحث الوطني حول التشغيل</h2>
          <h2>            2020          </h2>
          <h3> تأشيرة رقم: 27.12.95.10 </h3>
        </div> 
        <div className="surveyjs">
          
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
            onValidateQuestion= {this.surveyValidateQuestion}
         />
           
        
          <h4>تسجبل العمل</h4>
          <button onClick={() => this.download(model)}>حفظ json</button><br></br>
          <button onClick={() => this.savePDF(model)}>حفظ PDF</button> 
          
        </div>
    
          </div>
          
    );
  }
}

export default familySurvey;


