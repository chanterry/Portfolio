import './App.css';
import Header from './components/Header'
import Languages from './data/TranslationData'

function App() {
  return (
    <div className="App">
      <Header data={Languages}/>
    </div>
  );
}

export default App;
