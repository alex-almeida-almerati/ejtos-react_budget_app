import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    return (
        <div className='alert alert-success'>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Currency { Currency }
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">$ Dollar</a></li>
                    <li><a class="dropdown-item" href="#">£ Pound</a></li>
                    <li><a class="dropdown-item" href="#">€ Euro</a></li>
                    <li><a class="dropdown-item" href="#">₹ Ruppee</a></li>
                </ul>
            </div>        
        </div>        
    );
};
export default Currency;
