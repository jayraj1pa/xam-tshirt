import './App.css';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer'
import { Route, Routes } from 'react-router-dom';
import WishList from './Pages/WishList';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>

<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/Wishlist' element={<WishList/>}/>

</Routes>


      <Footer/>
    </div>
  );
}

export default App;
