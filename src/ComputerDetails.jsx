import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ComputerDetails = () => {
    const data=useLoaderData();
    console.log('ccccc',data);
    return (
        <div>
            computer details
        </div>
    );
};

export default ComputerDetails;