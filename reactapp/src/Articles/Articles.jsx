import React from 'react';
import strawberry from "./strawberries.jpg";
import grapes from "./grapes.jpg";
import salad from "./salad.jpg";
import './Articles.css';


const Articles=()=>
{
    return(
        <div className='main'>
            <div className='productsss'>
                <h2>
                    <span className='text-color-orange'>Our</span> News
                </h2>
                <div className='line'></div>
                <p className='random-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> Aliquid, fuga quas
                itaque eveniet beatae optio.
                </p>
            </div>
            <div className="groups">
                <div className="cards" style={{ width: "18rem" }}>
                <img className="card-img-top" src={strawberry} alt="Fresh ripe strawberries" />
                    <div className="card-body">
                        <div className='text-ar'>
                            <h5 className="card-title titles">You will vainly look for fruiton it in autumn.</h5>
                            <div className='pub'>
                                <p className='pub-detail1'><i className="bi bi-person-fill"></i><small>Admin</small></p>
                                <p className='pub-detail2'><i className="bi bi-calendar-fill"></i><small>27 December, 2019</small></p>
                            </div>
                            <p className="card-text">
                            Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitaе mattis nunc, egestas viverra eros.
                            </p>
                            <h6 className='more-content'>read more ></h6>
                        </div> 
                    </div>
                </div>
                <div className="cards" style={{ width: "18rem" }}>
                <img className="card-img-top" src={salad} alt="Fresh sala" />
                    <div className="card-body">
                        <div className='text-ar'>
                            <h5 className="card-title titles">You will vainly look for fruiton it in autumn.</h5>
                            <div className='pub'>
                                <p className='pub-detail1'><i className="bi bi-person-fill"></i><small>Admin</small></p>
                                <p className='pub-detail2'><i className="bi bi-calendar-fill"></i><small>27 December, 2019</small></p>
                            </div>
                            <p className="card-text">
                            Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitaе mattis nunc, egestas viverra eros.
                            </p>
                            <h6 className='more-content'>read more ></h6>
                        </div> 
                    </div>
                </div>
                <div className="cards" style={{ width: "18rem" }}>
                <img className="card-img-top" src={grapes} alt="Grapes for wine" />
                    <div className="card-body">
                        <div className='text-ar'>
                            <h5 className="card-title titles">You will vainly look for fruiton it in autumn.</h5>
                            <div className='pub'>
                                <p className='pub-detail1'><i className="bi bi-person-fill"></i><small>Admin</small></p>
                                <p className='pub-detail2'><i className="bi bi-calendar-fill"></i><small>27 December, 2019</small></p>
                            </div>
                            <p className="card-text">
                            Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitaе mattis nunc, egestas viverra eros.
                            </p>
                            <h6 className='more-content'>read more ></h6>
                        </div> 
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Articles;