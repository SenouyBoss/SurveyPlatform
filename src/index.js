import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import load from './loadSurvey';
import create from './createSurvey';
import work from './workSurvey';
import family from './familySurvey';
import newS from './newSurvey';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((

    //<App />
    <BrowserRouter>
        <Switch>

            <Route exact path="/" component={App} />
            <Route path="/loadSurvey" component={load} />
            <Route path="/CreateSurvey" component={create} />
            <Route path="/familySurvey" component={family} />
            <Route path="/workSurvey" component={work} />
            <Route path="/newSurvey" component={newS} />

        </Switch>
    </BrowserRouter>
    
), document.getElementById('root'));
registerServiceWorker();
