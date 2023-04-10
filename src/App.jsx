import './App.css';
import NavBar from './components/NavBar/NavBar';
import ContainerCardItems from './components/Item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/Item/DetailsItem';
import ProviderContextCart from './components/Item/ProviderContextCart';

function App() {

  return (
    <ProviderContextCart>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/'  element= { <ContainerCardItems/> }/>
            <Route path='/item/:idItem' element= { <DetailsItem/> }/>
            <Route path='/category/:idCategory' element= {  <ContainerCardItems/> }/>
          </Routes>
      </BrowserRouter>
    </ProviderContextCart>
  );
};

export default App;
