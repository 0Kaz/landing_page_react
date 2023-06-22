import CitiesSection from "./components/CitiesSection"
import ApplySection from "./components/ApplySection";
import Footer from "./components/Footer"

import './App.css';

function App() {
  return (
    <>
    {/* Division de trois sections de la page en composants principaux*/}
      <ApplySection/>
      <CitiesSection/>
      <Footer/>
    </>
  );
}

export default App;
