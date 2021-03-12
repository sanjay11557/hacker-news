import React, {useState, useEffect} from 'react';
import ListItem from '../../Containers/ListItem/index';

const CommonLink = ({api}) => {
    const [main, setMain] = useState();
    const [next, setNext] = useState(false);
    useEffect(() => {
        api.then(res => {
            console.log(res);
            setMain(res);
            setNext(true);
        }).catch(err => {
            console.log(err.response);
            setNext(true);
        });
    },[])
    

    return (
        <React.Fragment>
            {next && <ListItem data={main} />}
        </React.Fragment>
    );
};

export default CommonLink;