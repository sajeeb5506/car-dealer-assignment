
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Regestation from './components/Regestation/Regestation';
import Requiewauth from './RequireAuth/Requiewauth';


function App() {
  return (
    <div>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regestation/>} />
        <Route path="/inventory" element={
          <Requiewauth>
            <Inventory />
          </Requiewauth>
        } />
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
