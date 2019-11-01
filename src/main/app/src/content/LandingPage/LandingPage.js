import React, { useState } from 'react';
import {
    Button,
    Modal,
    TextInput,
    TextArea,
    Dropdown
  } from 'carbon-components-react';
import Scenario from '../../components/Scenario';
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

const NewScenarioModal = ({isShowing, toggle}) => {
    const items = [
        {
          id: 'option-1',
          text: 'Option 1',
        },
        {
          id: 'option-2',
          text: 'Option 2',
        },
        {
          id: 'option-3',
          text: 'Option 3',
        },
        {
          id: 'option-4',
          text: 'Option 4',
        },
      ];
      
      const stringItems = ['Option 1', 'Option 2', 'Option 3'];
      
      const types = {
        'Default (default)': 'default',
        'Inline (inline)': 'inline',
      };
      
      const props = () => ({
        id: "from",
        type: "default",
        label: "Dropdown menu options",
        ariaLabel: "Dropdown",
        disabled: false,
        light: false,
        titleText: "From",
        helperText: "",
        invalid: false,
        invalidText: ""
      });
      
      const itemToElement = item => {
        const itemAsArray = item.text.split(' ');
        return (
          <div>
            <span>{itemAsArray[0]}</span>
            <span style={{ color: 'blue' }}> {itemAsArray[1]}</span>
          </div>
        );
    };
    return (
    <Modal aria-label="Modal page"
        className="landing-page__popup"
        focusTrap={true}
        iconDescription="Close the modal"
        //modalAriaLabel="A label to be read by screen readers on the modal root node"
        modalHeading="Create Scenario"
        //modalLabel="Label"
        onBlur={function noRefCheck(){}}
        onClick={function noRefCheck(){}}
        onFocus={function noRefCheck(){}}
        onKeyDown={function noRefCheck(){}}
        onRequestClose={toggle}
        onRequestSubmit={function noRefCheck(){}}
        //onSecondarySubmit={function noRefCheck(){}}
        open = {isShowing}
        passiveModal={false}
        primaryButtonDisabled={false}
        primaryButtonText="Create Scenario"
        //secondaryButtonText="Secondary Button"
        selectorPrimaryFocus="[data-modal-primary-focus]"
        >
        <div className="bx--modal-content__text">
            <TextInput
                className="some-class"
                defaultValue=""
                disabled={false}
                //helperText="Optional helper text."
                id="scenario_name"
                invalid={false}
                invalidText="A valid name is required"
                labelText="Scenario Name"
                light={false}
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                placeholder="Please enter scenario  name"
                type="text"
            />
            <TextArea
                className="some-class"
                cols={70}
                disabled={false}
                //helperText="Optional helper text."
                id="scenario_description"
                invalid={false}
                invalidText="A valid description is required"
                labelText="Scenario Description"
                light={false}
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                placeholder="Please enter scenario description"
                rows={4}
            />
            <div>Temporal horizon</div>
            <div style={{ width: 150 }} >
                <Dropdown
                    {...props()}
                    items={items}
                    itemToString={item => (item ? item.text : '')}
                    onChange={({ selectedItem }) =>
                        setTimeout(() => setState({ selectedItem }), 1000)
                    }
                    selectedItem={{
                        id: 'option-1',
                        text: 'Option 1',
                      }}
                    />
                </div>
                <div style={{ width: 150 }} >
                <Dropdown
                    {...props()}
                    items={items}
                    itemToString={item => (item ? item.text : '')}
                    onChange={({ selectedItem }) =>
                        setTimeout(() => setState({ selectedItem }), 1000)
                    }
                    selectedItem={{
                        id: 'option-1',
                        text: 'Option 1',
                      }}
                    />
                </div>
        </div>
    </Modal>
    );
}
const LButton = ({ align, text, src, clickEvent }) => (
    <Button className="ladning-page__button" onClick={clickEvent}>
      <img className={align} src={src} />
      {text}
    </Button>
)
const LandingPage = () => {
    const {isShowing, toggle} = useModal();
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
                    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-12">
                        <LButton align="left" text="New Scenario" src={addIcon} clickEvent={toggle}/>
                    </div>
                    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-4">
                        <LButton align="right" text="Compare Scenarios" src={addIcon} />
                    </div>
                </>
            </div>
            <NewScenarioModal isShowing={isShowing} toggle={toggle}></NewScenarioModal>
        </div>
    );
};

export default LandingPage;