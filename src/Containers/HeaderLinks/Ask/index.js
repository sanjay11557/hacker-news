import React from 'react';
import {api} from '../../../SharedComponents/API/index';
import CommonLink from '../../../SharedComponents/CommonLink/index';

const Newest = () => {

    return (
        <React.Fragment>
            <CommonLink api={api.ask()} />
        </React.Fragment>
    );
};


export default Newest;