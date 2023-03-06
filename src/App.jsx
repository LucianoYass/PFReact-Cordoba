import './App.css';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import Navbar from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer texto=' Luciano'/>
    </div>
  );
};

export default App;
