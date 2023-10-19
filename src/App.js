import './App.css';
import Navbar from './components/navBar/Navbar';
import Hero from './pages/hero/Hero';
import Popular from './pages/popular/Popular';
import Products from './pages/products/products';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Products/>
    </>
  );
}

export default App;
