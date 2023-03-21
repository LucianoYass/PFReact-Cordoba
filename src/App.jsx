import './App.css';
import NavBar from './components/Navbar/navbar';
import ContainerCardItems from './components/Item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from './components/Item/DetailsItem';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/'  element= { <ContainerCardItems/> }/>
          <Route path='/item/:idItem' element= { <DetailsItem/> }/>
          <Route path='/category/:idCategory' element= { <ContainerCardItems/> }/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
