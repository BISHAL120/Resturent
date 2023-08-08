import React from 'react';
import './Aboutus.css';
import aboutus1 from '../../images/aboutus1.png';
import aboutus2 from '../../images/aboutus2.png';
import aboutus3 from '../../images/aboutus3.png';
import icon1 from '../../images/icons/Group 204.png';
import icon2 from '../../images/icons/Group 1133.png';
import icon3 from '../../images/icons/Group 245.png';


const Aboutus = () => {
    return (
        <div className='container'>
            <div className='mt-3'>
                <h1>Why You Choose Us</h1>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, quibusdam consequatur <br /> officiis eaque quas recusandae cum perferendis repellat harum <br /> veniam voluptates, sequi ducimus modi adipisci quisquam blanditiis expedita! Enim, laboriosam. </p>
            </div>
            <div className='carts about d-flex justify-content-between align-items-start   '>
                <div className="cart">
                    <img className='shef' src={aboutus1} alt="" />
                    <div className='detail'>
                        <h3><img className='icon mx-3' src={icon1} alt="" />Fast Delivery</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p><small className=' text-danger '>See More ➡️</small></p>
                    </div>
                </div>
                <div className="cart">
                    <img className='shef'src={aboutus2} alt="" />
                    <div className='detail'>
                        <h3><img className='icon mx-3 ' src={icon2} alt="" />A Good Auto Responder</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p><small className=' text-danger '>See More ➡️</small></p>
                    </div>
                </div>
                <div className="cart">
                    <img className='shef' src={aboutus3} alt="" />
                    <div className='detail'>
                        <h3><img className='icon mx-3' src={icon3} alt="" />Home Delivery</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p><small className=' text-danger '>See More ➡️</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;