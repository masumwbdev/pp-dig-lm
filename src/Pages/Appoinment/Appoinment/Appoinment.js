import React from 'react';
import {useParams} from 'react-router'

const Appoinment = () => {
    
    const {appoinmentId} = useParams();
    console.log(appoinmentId)
    return (
        <div>
            <h4>This is appoinment {appoinmentId}</h4>
        </div>
    );
};

export default Appoinment;