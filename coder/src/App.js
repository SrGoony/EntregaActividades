import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Componentes/navBar';
import ItemListContainer from './Componentes/itemListContainer';


function App() {
  return (
    <React.Fragment className = "App">

    <NavBar></NavBar>

    <ItemListContainer></ItemListContainer>


    </React.Fragment>
    
  );
}

export default App;
