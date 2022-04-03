import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const GiftContext = createContext('PS5');

const Grandpa = () => {
    const ornament = "Diamond";
    const [house, setHouse] = useState(1);
    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <GiftContext.Provider value='RTX 3090'>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <button onClick={handleBuyHouse}>Buy House</button>
                <p>{house}</p>
                <div className='grandpa-child'>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </GiftContext.Provider>
    );
};

export default Grandpa;