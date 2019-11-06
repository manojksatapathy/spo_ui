import React, { useState } from 'react';
import {
    Button
  } from 'carbon-components-react';
import Scenario from '../../components/Scenario';
import NewScenarioModal from '../../components/NewScenarioModal';
import addIcon from "../../image/add.png";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
  
    function toggle() {
      setIsShowing(!isShowing);
    }
  
    return {
      isShowing,
      toggle,
    }
};

const LButton = ({ align, text, src, clickEvent }) => (
    <Button className="ladning-page__button" onClick={clickEvent}>
      <img className={align} src={src} />
      {text}
    </Button>
)
const LandingPage = ({callBack}) => {
    const {isShowing, toggle} = useModal();
    const [value, setValue] = useState({});
    const handleClick = props => {
        console.log(props);
        setValue(props.scenarioname);
        var rootPath=window.rootPath||"";
        callBack('toNda');
        /* return (
            <div style={{height: "100%"}}>{
                <Route exact path={rootPath+"/NdaPage"} component={NdaPage}/>
            }</div>
        ); */
    }

    return (
        <div className="bx--grid bx--grid--full-width landing-page">
            <div className="bx--row landing-page__banner">
                <div className="bx--col-lg-16">
                <h1 className="landing-page__heading">
                    Dashboard
                </h1>
                </div>
            </div>
            <div className="bx--row landing-page__r2">
                <div className="bx--col bx--no-gutter">
                    <>
                        <Scenario />
                    </>
                </div>
            </div>
            
            <div className="bx--row landing-page__r3">
                <>
                    <div className="bx--col-md-8 bx--col-lg-12 bx--col-xlg-12">
                        <LButton align="left" text="New Scenario" src={addIcon} clickEvent={toggle}/>
                    </div>
                    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-4">
                        <LButton align="right" text="Compare Scenarios" src={addIcon} />
                    </div>
                </>
            </div>
            <NewScenarioModal 
                isShowing={isShowing} 
                toggle={toggle}
                onClickHandler={handleClick}>
            </NewScenarioModal>
        </div>
    );
};

export default LandingPage;