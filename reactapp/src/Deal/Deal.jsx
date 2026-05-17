import React, { useState, useEffect } from "react";
import './deal.css';

const Deal = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-12-31T23:59:59");
        const difference = targetDate - new Date();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='deal-part'>
            <div className='deal-pic'>
                <div className='off-tag'>
                    <h5 className="percen">30%</h5>
                    <p className="perc">off per kg</p>
                </div>
            </div>
            <div className='deal-text'>
                <h1 className='off-title'>
                    <span className='text-color-orange'>Deal</span> of the month
                </h1>
                <h4 className='info'>HIKAN STRAWBERRY</h4>
                <p className='deal-texts'>
                    Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant.
                </p>
                <div className='timer-box'>
                    <div className='days'> 
                        <h1 className="time-title"><span className='text-color-orange'>{timeLeft.days}</span></h1>
                        <p className="time-text">Days</p>
                    </div>
                    <div className='days'> 
                        <h1 className="time-title"><span className='text-color-orange'>{timeLeft.hours}</span></h1>
                        <p className="time-text">Hours</p>
                    </div>
                    <div className='days'> 
                        <h1 className="time-title"><span className='text-color-orange'>{timeLeft.minutes}</span></h1>
                        <p className="time-text">Mins</p>
                    </div>
                    <div className='days'> 
                        <h1 className="time-title"><span className='text-color-orange'>{timeLeft.seconds}</span></h1>
                        <p className="time-text">Secs</p>
                    </div>
                </div>
                <div className='butt'>
                    <button type="button" className="btn btn-dark button1 special">
                        <i className="fa-solid fa-shopping-cart cart-icon icon"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deal;