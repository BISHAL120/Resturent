import React from 'react';
import './Home.css';
import banner from '../../images/bannerbackground.png'

const Home = () => {
    return (
        <div>
            <div className='hero-pic'>
                <div>
                    <div className='banner'>
                        <img src={banner} alt="" />
                        <div className='container hero-title'>
                            <h1>Best Food Waiting For Your Belly</h1>
                            <div className='search-field'>
                                <input className='input' type="text" placeholder='Search Your Favouright Food items' />
                                <button>search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;