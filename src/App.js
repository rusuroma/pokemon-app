import './App.css';
import Header from './coponents/HeaderComponent';
import LayoutFirst from './coponents/LayoutFirst';
import LayoutSecond from './coponents/LayoutSecond';
import LayoutThird from './coponents/LayoutThird';
import Footer from './coponents/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <LayoutFirst/>
     <LayoutSecond/>
    <LayoutThird />
    <Footer />
    </div>
  );
}

export default App;
