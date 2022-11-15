import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
    return (
      <>
      <NavBar/>
      <ItemsListContainer />
      </>
    );
}

export default App;
