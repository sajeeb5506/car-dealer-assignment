
import { Route, Routes } from 'react-router-dom';
import Allcar from './Allcar/Allcar';
import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Home/Footer/Footer';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Regestation from './components/Regestation/Regestation';
import Requiewauth from './RequireAuth/Requiewauth';
import AddItems from './UserItems/AddItems/AddItems';
import ManageItem from './UserItems/ManageItems/ManageItem';
import MyItems from './UserItems/Myitems/MyItems';


function App() {
  return (
    <div>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={
           <Blog /> 
     
        
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regestation/>} />
      
    
      <Route path="/manageitems" element={
      <Requiewauth>
      <ManageItem />
      </Requiewauth>
      } />
      <Route path="/additems" element={<AddItems />} />
      <Route path="/myitems" element={<MyItems />} />
      

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
