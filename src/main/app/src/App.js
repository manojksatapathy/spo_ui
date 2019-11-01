import React, { Component } from 'react';
import { Content } from 'carbon-addons-iot-react';
import { Route, Switch } from 'react-router-dom';
import SPOHeader from './components/SPOHeader'
import LandingPage from './content/LandingPage';
import { Scenario } from './components/Scenario';

import "./app.scss";

class App extends Component{
    
    render() {
      return (
        <>
          <SPOHeader />
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </Content>
           
        </>
      );
    }
}

export default App;