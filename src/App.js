import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import DataTechnologies from './data/TechnologiesData'
import DataTechnologies2 from './data/TechnologiesData2'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About data={DataTechnologies} data2={DataTechnologies2}/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
