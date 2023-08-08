import React from 'react';
import breakfast1 from '../../images/breakfast/breakfast1.png';
import breakfast2 from '../../images/breakfast/breakfast2.png';
import breakfast3 from '../../images/breakfast/breakfast3.png';
import breakfast4 from '../../images/breakfast/breakfast4.png';
import breakfast5 from '../../images/breakfast/breakfast5.png';
import breakfast6 from '../../images/breakfast/breakfast6.png';

const Breakfast = () => {
    return (
        <div className='container' id='breakfast'>
            <h1 className=' text-center'>Take Your Breakfast</h1>
            <div className='containerr '>
                <div className='lunch'>
                    <img src={breakfast1} alt="" />
                    <p className='lunch-title'>Beef Steak</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 15.99</p>
                </div>
                <div className='lunch'>
                    <img src={breakfast2} alt="" />
                    <p className='lunch-title'>Honey-Soy-Glazed Salmon</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 7.99</p>
                </div>
                <div className='lunch'>
                    <img src={breakfast3} alt="" />
                    <p className='lunch-title'>Tarragon-Rubbed-Salmon</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 6.99</p>
                </div>
                <div className='lunch'>
                    <img src={breakfast4} alt="" />
                    <p className='lunch-title'>Indian Lunch</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 8.99</p>
                </div>
                <div className='lunch'>
                    <img src={breakfast5} alt="" />
                    <p className='lunch-title'>Fried Chicken Bento</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 9.99</p>
                </div>
                <div className='lunch'>
                    <img src={breakfast6} alt="" />
                    <p className='lunch-title'>Healthy Meal Plan</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 3.99</p>
                </div>
            </div>
        </div>
    );
};

export default Breakfast;