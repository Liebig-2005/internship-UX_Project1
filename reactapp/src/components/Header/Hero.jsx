import React from 'react';
import Footer from './Footer';
import './Hero.css';

const Hero=()=>
{
    return(
        <div class='main'>
            <section className='hero'>
                <div className='hero-content content'>
                    <p className='text-hero text'>FRESH & ORGANIC</p>
                    <h1 className='text-hero head-del'>Delicious Seasonal Fruits</h1>
                    <div class='buttons'>
                        <button type="button" className="btn button1">Fruit Collection</button>
                        <button type="button" className="btn button2">Contact Us</button>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Hero;