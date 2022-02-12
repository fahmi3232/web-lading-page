import './App.css';
import AboutComp from './Component/AboutComp';
import FeatureComp from './Component/FeatureComp';
import HeaderComp from './Component/HeaderComp';
import Kontak from './Component/Kontak';
import PresenTaComp from './Component/PresenTaComp';
import aboutImage from './images/Frame 19.png'

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <FeatureComp />
      <AboutComp image={aboutImage} title="Comes with all you need daily life" button="Get The App" />
      <PresenTaComp />
      <AboutComp image={aboutImage} title="Download and get the app" button="Download" />
      <Kontak />
    </div>
  );
}

export default App;
