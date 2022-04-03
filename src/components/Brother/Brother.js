import React, { useContext } from 'react';
import { GiftContext } from '../Grandpa/Grandpa';

const Brother = ({ house }) => {
    const gift = useContext(GiftContext);
    return (
        <div>
            <h5>Brother</h5>
            <p>{house}</p>
            <p>{gift}</p>
        </div>
    );
};

export default Brother;