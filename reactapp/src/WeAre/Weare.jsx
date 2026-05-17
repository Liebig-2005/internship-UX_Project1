import React from 'react';
import './Weare.css';
import yourVideo from './your-video.mp4';

function VideoComponent() {
    return (
        <div className="video-container">
            <video controls className="video-element">
                <source src={yourVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}


const Weare=()=>
{
    return(
        <div className='video-card'>
            <div className='video-part'>
                <VideoComponent/>
            </div>
            <div className='video-ex'>
                <p className='since'>Since Year 1999</p>
                <h3 className='video-title'>We are <span className='text-color-orange'>Fruitkha</span></h3>
                <p className='video-des'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus</p>
                <button type='button' className='btn button1'>know more</button>
            </div>
        </div>
    )
}

export default Weare;