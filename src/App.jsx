import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="Bienvenido a nuestra tienda de componentes electrónicos" />
    </div>
  );
}

export default App;
