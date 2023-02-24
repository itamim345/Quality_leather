import './App.css';
import About from './component/About';
import Banner from './component/Banner';
import FeaturedProducts from './component/FeaturedProducts';
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
    </div>
  );
}

export default App;
