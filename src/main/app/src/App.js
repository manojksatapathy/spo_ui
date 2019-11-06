import React, { Component } from 'react';
import { Content } from 'carbon-addons-iot-react';
import { Route, Switch } from 'react-router-dom';
import SPOHeader from './components/SPOHeader'
import LandingPage from './content/LandingPage';
import NdaPage from './content/NdaPage';

import "./app.scss";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      toDashboard: true,
      toNda: false
    };
    this.callBack = this.callBack.bind(this);
  }
  callBack = (source) =>{
    console.log('testing callback', source);
    if(source === 'toNda'){
      this.setState({
        toNda: true,
        toDashboard: false
      });
    }
    if(source === 'toDashboard'){
      this.setState({
        toNda: false,
        toDashboard: true
      });
    }
  }
  goBack = () => {
    this.setState({
      toDashboard: true,
      toNDA: false
    });
  }
  render() {
    let toDashboard = this.state.toDashboard;
    let toNda = this.state.toNda;
    console.log(toDashboard, toNda);
    if(toDashboard){
      return (
        <>
          <SPOHeader />
          <Content>
            <LandingPage callBack={this.callBack} />
          </Content>
        </>
      );
    }
    if(toNda){
      return (
        <>
          <SPOHeader />
          <Content>
            <NdaPage 
              goBack={this.goBack} 
              />
          </Content>
        </>
      );
    }
    /* return (
      <>
        <SPOHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/NdaPage" component={NdaPage} />
          </Switch>
        </Content>
          
      </>
    ); */
  }
}

export default App;