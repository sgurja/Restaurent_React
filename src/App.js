import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Menu from './Component/Menu/menu';
import Specials from './Component/Specials/specials';
import Events from './Component/Events/Events';
import Gallery from './Component/Gallery/Gallery';
import Chefs from './Component/Chefs/Chefs';
import Contact from './Component/Contact/Contact';
import Swiper from 'swiper';
// import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Home/>
   <About/>
   <Menu/>
   <Specials/>
   <Events/>
   <Gallery/>
   <Chefs/>
   <Contact/>
{/* <Main>
<Routes>
  <Route exact path='/lobster' element={}/>
</Routes>

  </Main> */}
   
   </>
  );
}

export default App;

