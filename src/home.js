import React from 'react';
import { Link } from 'react-router-dom';
import Snake from './snake.jpg';
import TTT from './ttt.png';
import RPS from './RPS.png';
import './App.css';

function Home() {
  return (
    <>
      <div className='gameZone'>
        <Link to="/GameZone/RPS">
          <div className='low'>
            <img src={RPS} alt='rps' className='GLOGO' />
          </div>
        </Link>
        <Link to="/GameZone/TTT">
          <div className='low'>
            <img src={TTT} alt='TTT' className='GLOGO' />
          </div>
        </Link>
        <Link to="/GameZone/Snake">
          <div className='low'>
            <img src={Snake} alt='snake' className='GLOGO' />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
