import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ProductSelect from './components/ProductSelect/ProductSelect';


function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <ProductSelect />        
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryName" element={<ItemListContainer/>} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    );
}

export default App;
