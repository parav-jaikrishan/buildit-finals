import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
