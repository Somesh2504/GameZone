
import './App.css';
import {Link} from 'react-router-dom';
import MenuBar from './menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RPS from './RPS';
import Snake from './Snake';
import TTT from './TTT';
import Home from './home';

function App() {
 
  return (
    <>
     <BrowserRouter> 
         <header className='header'>
          <MenuBar></MenuBar>
          <h1 className='game'>GAME ZONE</h1>
        </header>
        <div className='main'>
        <Routes> 
          <Route exact path="/GameZone" element={ <Home></Home>} /> 
          <Route path="/RPS"  element={<RPS></RPS>} /> 
          <Route path="/TTT"  element={<TTT></TTT>} />
          <Route path="/Snake"  element={<Snake></Snake>} /> 
        </Routes> 
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
