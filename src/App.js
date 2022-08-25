import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { About } from './pages/About';
import GoToTop from './components/go-to-top/GoToTop';

function App() {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        <GoToTop/>
    </div>
  );
}

export default App;
