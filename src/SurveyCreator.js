import React, { Component } from "react";
import * as SurveyJSCreator from "survey-creator";
import * as SurveyKo from "survey-knockout";
import "survey-creator/survey-creator.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

//import "icheck/skins/square/blue.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import * as widgets from "surveyjs-widgets";

SurveyJSCreator.StylesManager.applyTheme("default");

//widgets.icheck(SurveyKo, $);
widgets.prettycheckbox(SurveyKo);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);
widgets.bootstrapslider(SurveyKo);

class SurveyCreator extends Component {
  surveyCreator;
  componentDidMount() {
    let options = { showEmbededSurveyTab: false, showJSONEditorTab: false, showTestSurveyTab: false };
    this.surveyCreator = new SurveyJSCreator.SurveyCreator(
      "surveyCreatorContainer",
      options
    );
    //var creator = new SurveyCreator.SurveyCreator("creatorElements", options);
    //this.surveyCreator.surveyLocalization.locales = ["ar"];
    this.surveyCreator.locale = ["ar"];
    this.surveyCreator.showToolBox = "right";
    this.surveyCreator.showPropertyGrid = "right";
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.surveyCreator.text));
    const filename = "NewSurvey";
    const json = JSON.stringify(this.surveyCreator.text);
    const blob = new Blob([json], {type: 'aplication/json'});
    const href =  URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = filename + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return <div id="surveyCreatorContainer" />;
  }
}

export default SurveyCreator;
