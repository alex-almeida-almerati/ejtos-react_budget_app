import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    const handleChangeBudget = (event) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
                <input type='number' 
                    id='budget' 
                    value={budget} 
                    step='10' 
                    size='15'
                    required='required'
                    onChange={handleChangeBudget}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
