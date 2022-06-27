import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/ItemList';
import ShoppingCart from './components/ShoppingCart';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      if (exist.qty + 1 <= product.stock){
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <NavBar countCartItems={cartItems.length}></NavBar>
      <div className="row">
      <ItemListContainer products={products} onAdd={onAdd}></ItemListContainer>
      <ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></ShoppingCart>
      </div>
    </div>
  );
}

export default App;
