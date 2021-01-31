import './App.css';
import NavbarComponent from './components/Navbar/index';
import ItemListContainer from './components/container/ItemListContainer';

const App = () => {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainer greeting="Pagina en proceso"/>
    </>
  );
}

export default App;
