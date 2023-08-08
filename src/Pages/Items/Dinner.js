import React from 'react';
import dinner1 from '../../images/dinner/dinner1.png';
import dinner2 from '../../images/dinner/dinner2.png';
import dinner3 from '../../images/dinner/dinner3.png';
import dinner4 from '../../images/dinner/dinner4.png';
import dinner5 from '../../images/dinner/dinner5.png';
import dinner6 from '../../images/dinner/dinner6.png';

const Dinner = () => {
    return (
        <div className='container' id='dinner'>
            <h1 className=' text-center'>Take Your Dinner</h1>
            <div className='containerr '>
                <div className='lunch'>
                    <img src={dinner1} alt="" />
                    <p className='lunch-title'>Beef Steak</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 15.99</p>
                </div>
                <div className='lunch'>
                    <img src={dinner2} alt="" />
                    <p className='lunch-title'>Honey-Soy-Glazed Salmon</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 7.99</p>
                </div>
                <div className='lunch'>
                    <img src={dinner3} alt="" />
                    <p className='lunch-title'>Tarragon-Rubbed-Salmon</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 6.99</p>
                </div>
                <div className='lunch'>
                    <img src={dinner4} alt="" />
                    <p className='lunch-title'>Indian Lunch</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 8.99</p>
                </div>
                <div className='lunch'>
                    <img src={dinner5} alt="" />
                    <p className='lunch-title'>Fried Chicken Bento</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 9.99</p>
                </div>
                <div className='lunch'>
                    <img src={dinner6} alt="" />
                    <p className='lunch-title'>Healthy Meal Plan</p>
                    <p><small>How we dream about our future</small></p>
                    <p className="price">$ 3.99</p>
                </div>
            </div>
            <div className=' d-flex justify-content-center align-items-center '>
                <button className='checkout '>Checkout Your Food</button>
            </div>
        </div>
    );
};

export default Dinner;