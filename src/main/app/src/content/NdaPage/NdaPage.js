import React from 'react';
import {
    Button
  } from 'carbon-components-react';

const NdaPage = ({goBack}) => {
    return (
        <div>
            <div>Development is in progress</div>
            
            <Button
                className="back"
                disabled={false}
                iconDescription="Button icon"
                kind="primary"
                onClick={goBack}
                onFocus={function noRefCheck(){}}
                renderIcon={undefined}
                size="default"
                tabIndex={0}
                type="button"
            >
                Back
            </Button>
        </div>
    );
};
export default NdaPage;