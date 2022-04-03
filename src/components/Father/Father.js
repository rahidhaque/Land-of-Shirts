import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = ({ house, ornament }) => {
    return (
        <div>
            <h4>Father</h4>
            <p>{house}</p>
            <div className='father-container'>
                <MySelf house={house} ornament={ornament}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div >
    );
};

export default Father;