import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h5>ME</h5>
            <p>{house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;