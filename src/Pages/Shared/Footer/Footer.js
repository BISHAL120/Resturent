import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <div className='footer '>
                <div className='container d-flex justify-content-between pt-5 '>
                    <div className='logo w-100 '>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className=' d-flex justify-content-around w-100 '>
                        <div className='footer-detail'>
                            <p>Read Our Blog</p>
                            <p>About Online Food</p>
                            <p>Sing Up To Delivery</p>
                            <p>Add Your Resturent</p>
                        </div>
                        <div className='footer-detail'>
                            <p>Get Help</p>
                            <p>Read FAQs</p>
                            <p>View All Cities</p>
                            <p>Resturent Near Me</p>
                        </div>
                    </div>
                </div>
                <div className='container d-flex justify-content-between w-100 mt-5'>
                    <div className='w-50'>
                        <p><small className='footer-detail'>Copyright@ 2023 Onlone Food</small></p>
                    </div>
                    <div className=' d-flex justify-content-around  w-50 '>
                        <div><p className='footer-detail'>Privacy Policy</p></div>
                        <div><p className='footer-detail'>Terms of Use</p></div>
                        <div><p className='footer-detail'>Pricing</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;