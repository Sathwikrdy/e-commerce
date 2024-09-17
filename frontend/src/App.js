
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop'
import Shopcategory from './pages/Shopcategory'
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import Signuplogin from './pages/Signuplogin'
import Footer from './components/Footer/Footer';
import men_banner from './components/assests/menbanner.png'
import women_banner from './components/assests/womenbanner.png'
import kid_banner from './components/assests/kidbanner.jpg'


function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category='men'/>}></Route>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category='women'/>}></Route>
        <Route path='/kids' element={<Shopcategory banner={kid_banner} category='kid'/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Signuplogin/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}


export default App;
