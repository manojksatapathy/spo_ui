import React, { useState } from 'react';
import {
    Button,
    Modal,
    TextInput,
    TextArea,
    Dropdown,
    DatePicker,
    DatePickerInput
  } from 'carbon-components-react';
import moment from "moment";

const NewScenarioModal = ({isShowing, toggle, onClickHandler}) => {
    const items = [
        {
          id: '2019',
          text: '2019',
        },
        {
          id: '2020',
          text: '2020',
        },
        {
          id: '2021',
          text: '2021',
        },
        {
          id: '2022',
          text: '2022',
        },
      ];
      
      const fromProps = () => ({
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

      const toProps = () => ({
        id: "to",
        type: "default",
        label: "Dropdown menu options",
        ariaLabel: "Dropdown",
        disabled: false,
        light: false,
        titleText: "To",
        helperText: "",
        invalid: false,
        invalidText: ""
      });
    
    const [ scenarioname, setScenarioname ] = useState("");
    const [ scenariodesc, setScenariodesc ] = useState("");
    
    const handleClick = event => {
        console.log(scenarioname);
        onClickHandler ({
            scenarioname: scenarioname,
            scenariodesc: scenariodesc
        });
    };
    return (
    <div>
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
        //primaryButtonText="Create Scenario"
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
                onChange={e => setScenarioname(e.target.value)}
                //onChange={function noRefCheck(){}}
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
                onChange={e => setScenariodesc(e.target.value)}
                //onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                placeholder="Please enter scenario description"
                rows={4}
            />
            <div className="bx--label">Temporal horizon</div>
            <div style = {{borderBottom: '1px solid gray', height: 65 }}>
            <div style={{ width: 150, float: 'left' }} >
                <Dropdown
                    {...fromProps()}
                    items={items}
                    itemToString={item => (item ? item.text : '')}
                    onChange={({ selectedItem }) =>
                        setTimeout(() => setState({ selectedItem }), 1000)
                    }
                    selectedItem={{
                        id: '2019',
                        text: '2019',
                      }}
                    />
                </div>
                <div style={{ width: 150, float: 'left', marginLeft: '10%' }} >
                <Dropdown
                    {...toProps()}
                    items={items}
                    itemToString={item => (item ? item.text : '')}
                    onChange={({ selectedItem }) =>
                        setTimeout(() => setState({ selectedItem }), 1000)
                    }
                    selectedItem={{
                        id: '2019',
                        text: '2019',
                      }}
                    />
                </div>
            </div>
            <div className="bx--label">Fixed period</div>
            <div style = {{borderBottom: '1px solid gray', height: 64 }}>
            <DatePicker
                dateFormat="m/d/Y"
                datePickerType="range"
                id="date-picker"
                light={false}
                locale="en"
                maxDate="1/20/2020"
                minDate="1/11/2019"
                onChange={function noRefCheck(){}}
                onClose={function noRefCheck(){}}
                short={false}
                >
                <DatePickerInput
                    className="some-class"
                    disabled={false}
                    iconDescription="Icon description"
                    id="date-picker-input-id"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText="From"
                    value={moment().format('MM/DD/YYYY')}
                    onChange={function noRefCheck(){}}
                    onClick={function noRefCheck(){}}
                    pattern="d{1,2}/d{4}"
                    placeholder="mm/dd/yyyy"
                    type="text"
                />
                <DatePickerInput
                    className="some-class"
                    disabled={false}
                    iconDescription="Icon description"
                    id="date-picker-input-id-2"
                    invalid={false}
                    invalidText="A valid value is required"
                    labelText="To"
                    onChange={function noRefCheck(){}}
                    onClick={function noRefCheck(){}}
                    pattern="d{1,2}/d{4}"
                    placeholder="mm/dd/yyyy"
                    type="text"
                />
                </DatePicker>
            </div>
            <div style={{paddingTop: '5%', float: 'right'}}>
            <Button
                    className="createScenario"
                    disabled={false}
                    iconDescription="Button icon"
                    kind="primary"
                    onClick={handleClick}
                    onFocus={function noRefCheck(){}}
                    renderIcon={undefined}
                    size="default"
                    tabIndex={0}
                    type="button"
                >
                    Create Scenario
                </Button>
            </div>
        </div>
    </Modal>
    </div>
    );
}

export default NewScenarioModal;