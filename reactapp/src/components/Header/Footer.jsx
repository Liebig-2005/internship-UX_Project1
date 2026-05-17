import React from 'react';
import './Footer.css';

const Footer=()=>
{
    return(
        <div className="info-container">
            <section className='sec1'>
                <div className="icons">
                    <i className="bi bi-truck"></i>
                </div>
                <div className="text-content">
                    <p className="head">Free Shipping</p>
                    <p>When order over $75</p>
                </div>
            </section>
            <section className='sec2'>
                <div className="icons">
                    <i className="bi bi-telephone-inbound-fill"></i>
                </div>
                <div className="text-content">
                    <p className="head">24/7 Support</p>
                    <p>Get support all day</p>
                </div>
            </section>
            <section className='sec3'>
                <div className="icons">
                    <i className="bi bi-clock-history"></i>
                </div>
                <div className="text-content">
                    <p className="head">Refund</p>
                    <p>Get refund within 3 days</p>
                </div>
            </section>
        </div>
    )
}

export default Footer;