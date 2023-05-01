import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);

    const handleChange = (event) => {
        alert('valor = ' + event.target.value);
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input 
                    type='number' 
                    id='budget' 
                    value={budget} 
                    step='10' 
                    required='required'
                    onChange={handleChange}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
