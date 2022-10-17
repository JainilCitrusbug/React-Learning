import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Product from './components/Product';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />}>
          <Route path='featured' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
