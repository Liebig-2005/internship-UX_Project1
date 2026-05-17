import React from 'react';
import './Footer.css';
import Logo from './Logo';

const Footer=()=>
{
    return(
        <div>
            <Logo/>
            <div className='categories'>
                <div className='side-by-side'>
                    <div className='about'>
                        <div className='content-con'>
                            <h4 className='content-head'>About us</h4>
                            <div className='line linefooter'></div>
                            <p className='content-text'>
                                Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                    </div>
                    <div className='touch'>
                        <div className='content-con'>
                            <h4 className='content-head'>Get in Touch</h4>
                            <div className='line linefooter'></div>
                            <p className='content-text'>
                                34/8, East Hukupara, Gifirtok, Sadan.<br/>
                                support@fruitkha.com<br/>
                                +00 111 222 3333
                            </p>
                        </div>
                    </div>
                    <div className='pagesoptions'>
                        <div className='content-con'>
                            <h4 className='content-head'>Pages</h4>
                            <div className='line linefooter'></div>
                            <p className='content-text'>
                                > Home<br/>
                                > About<br/>
                                > Shop<br/>
                                > News<br/>
                                > Contact
                            </p>
                        </div>
                    </div>
                    <div className='sub'>
                        <div className='content-con'>
                            <h4 className='content-head'>Subscribe</h4>
                            <div className='line linefooter'></div>
                            <p className='content-text'>
                                Subscribe to our mailing list to get the latest updates.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='bottom-part'>
                    <p className='copy'>
                        Copyrights © 2019 - <span className='text-color-orange'>Imran Hossain</span>, All Rights Reserved.<br/>
                        Distributed By - <span className='text-color-orange'>Themewagon</span>    
                    </p>
                    <p className='social'>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-dribbble"></i>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;