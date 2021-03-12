import React from 'react';
import {api} from '../../../SharedComponents/API/index';
import CommonLink from '../../../SharedComponents/CommonLink/index';

const Home = () => {
    console.log("Home")
    return (
        <React.Fragment>
            <CommonLink api={api.top()} />
        </React.Fragment>
    );
};


export default Home;