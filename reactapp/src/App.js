import React from 'react';
import NavBar from './components/Header/NavBar';
import Hero from './components/Header/Hero';
import './App.css';
import Products from './products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Articles from './Articles/Articles';
import December from './December/December';
import Review from './Review/Review';
import Footer from './Footer/Footer';
import Weare from './WeAre/Weare';
import Deal from './Deal/Deal';


function App() {
  return (
    <div className="App">
      <div className='main-content'>
        <NavBar/>
        <Hero/>
      </div>
      <div className='productssss'>
        <Products/>
      </div>
      <div className='deals'>
        <Deal/>
      </div>
      <div className='user-reviews'>
        <Review/>
      </div>
      <div className='video-sec'>
        <Weare/>
      </div>
      <div  className='december'>
        <December/>
      </div>
      <div className='ournews'>
        <Articles/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
