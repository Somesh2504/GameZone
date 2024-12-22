import React from 'react'
import {Link} from 'react-router-dom'
import Snake from './snake.jpg'
import TTT from './ttt.png'
import RPS from './RPS.png'
import './App.css'
function Home(){
  return (
  <>  
        <div className='gameZone'>
         <Link to="/RPS"><div className='low'><img src={RPS} alt='rps' className='GLOGO'></img></div></Link>
         <Link to="/TTT"><div className='low'><img src={TTT} alt='TTT' className='GLOGO'></img></div></Link>
         <Link to="/Snake"><div className='low'><img src={Snake} alt='snake' className='GLOGO'></img></div></Link>
        </div>
    
  </>
  )
}
export default Home
