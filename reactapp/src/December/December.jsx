import React from 'react';
import './December.css';
import straw from './1.jpg';

const December=()=>{
    return(
        <div className='sale-ad'>
            <div className="card text-bg-dark card-ad">
                <img src={straw} className="card-img img-ad" alt="back-ground" />
                <div className="card-img-overlay text-ov">
                    <h5 className="card-title sale">December sale is on!<br/>with big <span className='text-color-orange'>Discount...</span></h5>
                    <p className="card-text descrip">
                        <section className='like-news'>Sale!<br/>Upto</section> <span className='text-color-orange discount'>50%</span> off</p>
                    <button type="button" className="btn btn-dark button1 shop-now">Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default December;