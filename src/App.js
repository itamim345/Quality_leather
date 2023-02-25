import './App.css';
import About from './component/About';
import Banner from './component/Banner';
import FeaturedProducts from './component/FeaturedProducts';
import Footer from './component/Footer';
import MoreProducts from './component/MoreProducts';
import OurNav from './component/OurNav';

function App() {
  return (
    <div className="App">
      <OurNav/>
      <Banner/>
      <About/>
      <FeaturedProducts/>
      <MoreProducts/>
      <Footer/>
    </div>
  );
}

export default App;
