import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemList';
import NavBar from './components/navbar/navBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a mi pagina de compras"/>
    </>
  );
}

export default App;
