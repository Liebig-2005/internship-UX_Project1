import React from 'react';
import './Products.css';

const Products=()=>
{
    return(
        <div className='whole'>
            <div className='productsss'>
                <h2>
                    <span className='text-color-orange'>Our</span> Products
                </h2>
                <div className='line'></div>
                <p className='random-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Nulla malesuada eros vel ipsum viverra suscipit.
                </p>
            </div>
            <div className='items'>
                <div className="card box-card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={require("./strawberry.jpg")} alt="news1" />
                    <div className="card-body">
                        <div className='text-content'>
                            <h5 className="card-title titles">Strawberry</h5>
                            <p className="card-text">
                            Per Kg
                            </p>
                            <h3 className='price'>85$</h3>
                        </div>
                        <button type="button" className="btn btn-dark button1">
                        <i className="fa-solid fa-shopping-cart cart-icon icon"></i> Add to Cart
                        </button>
                    </div>
                </div>
                <div className="card box-card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={require("./berries.png")} alt="news2" />
                    <div className="card-body">
                        <div className='text-content'>
                            <h5 className="card-title titles">Berry</h5>
                            <p className="card-text">
                            Per Kg
                            </p>
                            <h3 className='price'>70$</h3>
                        </div>
                        <button type="button" className="btn btn-dark button1">
                        <i className="fa-solid fa-shopping-cart cart-icon icon"></i> Add to Cart
                        </button>
                    </div>
                </div>
                <div className="card box-card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={require("./lemon.png")} alt="news3" />
                    <div className="card-body">
                        <div className='text-content'>
                            <h5 className="card-title titles">Lemon</h5>
                            <p className="card-text">
                            Per Kg
                            </p>
                            <h3 className='price'>35$</h3>
                        </div>
                        <button type="button" className="btn btn-dark button1">
                        <i className="fa-solid fa-shopping-cart cart-icon icon"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;