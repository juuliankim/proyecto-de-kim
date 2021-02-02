import './App.css';
import NavbarComponent from './components/navbar';
import ItemListContainer from './components/container/item-list-container';

const App = () => {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainer greeting="Pagina en proceso"/>
    </>
  );
}

export default App;
