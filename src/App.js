import React, {useState, useCallback} from 'react';
import i18n from "i18next";
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import DataTechnologies from './data/TechnologiesData'
import DataTechnologies2 from './data/TechnologiesData2'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  // useState est utilisé pour toggler la valeur
  const [toggle, setToggle] = useState(true) 

  // fonction pour changer le drapeau et la traduction lors du clic du drapeau
  const toggleFlag = () => {
    setToggle(!toggle)

    if(toggle) {
        i18n.changeLanguage('en')
    } else {
        i18n.changeLanguage('fr')
    }
}

  return (
    <div className="App">
      <Header onToggle={toggleFlag} toggle={toggle} />
      <Home toggle2={toggle} />
      <About data={DataTechnologies} data2={DataTechnologies2} />
      <Projects toggle3={toggle} />
      <Footer />
    </div>
  );
}

export default App;
