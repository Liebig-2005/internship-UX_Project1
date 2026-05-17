import React from 'react';
import './Review.css';
import user1 from './user1.jpg';
import user2 from './user2.jpg';
import user3 from './user3.jpg';

const Review=()=>{
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide reviewpage" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active pages">
                    <div className='review-content'>
                        <div className='user-image1'>
                            <img src={user1} alt='user image1' />
                        </div>
                        <h3 className='user-name'>Riley Bradford</h3>
                        <h6 className='user-title'>Bank manager</h6>
                        <p className='user-review'>"Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "</p>
                        <i className="bi bi-quote quotation"></i>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='review-content'>
                        <div className='user-image2'>
                            <img src={user2} alt='user image2' />
                        </div>
                        <h3 className='user-name'>Giana Compton</h3>
                        <h6 className='user-title'>Special constable</h6>
                        <p className='user-review'>"Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "</p>
                        <i className="bi bi-quote quotation"></i>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='review-content'>
                        <div className='user-image3'>
                            <img src={user3} alt='user image3' />
                        </div>
                        <h3 className='user-name'>Jimmy Benson</h3>
                        <h6 className='user-title'>Estate agent</h6>
                        <p className='user-review'>"Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "</p>
                        <i className="bi bi-quote quotation"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;