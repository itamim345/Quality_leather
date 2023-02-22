import './App.css';
import About from './component/About';
import Banner from './component/Banner';
import OurNav from './component/OurNav';

function App() {
  return (
    <div className="App">
      <OurNav/>
      <Banner/>
      <About/>
    </div>
  );
}

export default App;
