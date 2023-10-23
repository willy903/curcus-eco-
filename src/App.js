import './App.css';
import Navbar from './components/navBar/Navbar';
import Hero from './pages/hero/Hero';
import Popular from './pages/popular/Popular';
import Products from './pages/products/products';
import Avi from './pages/avis/avi';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Products/>
      <Avi/>
      <Footer/>
    </>
  );
}

export default App;
