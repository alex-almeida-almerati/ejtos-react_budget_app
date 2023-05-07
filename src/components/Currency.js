import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const {dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }

    return (
        <div class="currency">
            <label>
                Currency ({
                <select class="currency"
                    onChange={event=>changeCurrency(event.target.value)} >
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
                })
            </label>
        </div>
        // <div class="btn-group">
        //     <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        //         Currency
        //     </button>
        //     <ul class="dropdown-menu">
        //         <li><a class="dropdown-item" href="#/" value="$">$ Dollar</a></li>
        //         <li><a class="dropdown-item" href="#/">£ Pound</a></li>
        //         <li><a class="dropdown-item" href="#/">€ Euro</a></li>
        //         <li><a class="dropdown-item" href="#/">₹ Ruppee</a></li>
        //     </ul>
        // </div>
      
    );
};
export default Currency;
