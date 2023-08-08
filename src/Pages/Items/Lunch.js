import React from 'react';
import './Lunch.css';
import lunch1 from '../../images/lunch/lunch1.png';
import lunch2 from '../../images/lunch/lunch2.png';
import lunch3 from '../../images/lunch/lunch3.png';
import lunch4 from '../../images/lunch/lunch4.png';
import lunch5 from '../../images/lunch/lunch5.png';
import lunch6 from '../../images/lunch/lunch6.png';

const Lunch = () => {
    return (
        <div className='container' id='lunch'>
            <h1 className=' text-center'>Take Your Lunch</h1>
            <div className=' containerr '>
                <div className='lunch'>
                    <img src={lunch1} alt="" />
                    <p className='lunch-title'>Beef Steak</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 15.99</p>
                </div>
                <div className='lunch'>
                    <img src={lunch2} alt="" />
                    <p className='lunch-title'>Honey-Soy-Glazed Salmon</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 7.99</p>
                </div>
                <div className='lunch'>
                    <img src={lunch3} alt="" />
                    <p className='lunch-title'>Tarragon-Rubbed-Salmon</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 6.99</p>
                </div>
                <div className='lunch'>
                    <img src={lunch4} alt="" />
                    <p className='lunch-title'>Indian Lunch</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 8.99</p>
                </div>
                <div className='lunch'>
                    <img src={lunch5} alt="" />
                    <p className='lunch-title'>Fried Chicken Bento</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 9.99</p>
                </div>
                <div className='lunch'>
                    <img src={lunch6} alt="" />
                    <p className='lunch-title'>Healthy Meal Plan</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 3.99</p>
                </div>
            </div>
        </div>
    );
};

export default Lunch;