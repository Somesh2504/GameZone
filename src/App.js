import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuBar from './menu';
import RPS from './RPS';
import Snake from './Snake';
import TTT from './TTT';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <header className='header'>
        <MenuBar />
        <h1 className='game'>GAME ZONE</h1>
      </header>
      <div className='main'>
        <Routes>
          <Route path="/GameZone" element={<Home />} />
          <Route path="/GameZone/RPS" element={<RPS />} />
          <Route path="/GameZone/TTT" element={<TTT />} />
          <Route path="/GameZone/Snake" element={<Snake />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
