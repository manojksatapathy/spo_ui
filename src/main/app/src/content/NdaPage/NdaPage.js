import React from 'react';
import Nda from '../../components/Nda';

import {
    Button
  } from 'carbon-components-react';

const NdaPage = ({goBack}) => {
    return (
        <div>
            <Nda />
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