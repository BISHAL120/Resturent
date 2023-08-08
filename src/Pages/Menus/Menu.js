import React from 'react';
import './Menu.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <div className='container menus'>
                <div><Nav.Link href="#breakfast">Breakfast</Nav.Link></div>
                <div><Nav.Link href="#lunch">Lunch</Nav.Link></div>
                <div><Nav.Link href="#dinner">Dinner</Nav.Link></div>
            </div>
        </div>
    );
};

export default Menu;