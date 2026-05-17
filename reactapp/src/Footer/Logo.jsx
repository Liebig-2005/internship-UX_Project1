import React from 'react';
import './logo.css';
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import logo4 from './logo4.png'



const Logo=()=>
{
    return(
        <div className='logo-main'>
            <div className='logo1'>
                <img src={logo1} className='brand1' alt='Brand 1'/>
            </div>
            <div className='logo2'>
                <img src={logo2} className='brand2' alt='Brand 2'/>
            </div>
            <div className='logo3'>
                <img src={logo3} className='brand3' alt='Brand 3'/>
            </div>
            <div className='logo4'>
                <img src={logo4} className='brand4' alt='Brand 4'/>
            </div>
        </div>
    )
}

export default Logo;