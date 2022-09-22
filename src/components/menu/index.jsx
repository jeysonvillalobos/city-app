import React from 'react';
import { MdLocationCity } from "react-icons/md";
import './style.css';

const Menu = () => (
    <div className='Menu'>
        <MdLocationCity className='city-icon'/>
        <h1 className='menu-title'>City App</h1>
    </div>
);

export default Menu;