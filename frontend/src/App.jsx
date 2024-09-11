import { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Fetch from './components/Fetch';
import Create from './components/Create';
import Search from './components/Search';
import Update from './components/Update';
import Delete from './components/Delete';

function App() {

  const [active, setActive] = useState("home");

  return (
    <div className='container'>
      <Header setActive={setActive}/>
      {(active === "home") &&  <Home />}
      {(active === "fetch") &&  <Fetch />}
      {(active === "create") &&  <Create />}
      {(active === "search") &&  <Search />}
      {(active === "update") &&  <Update />}
      {(active === "delete") &&  <Delete />}
      <Footer />
    </div>
  )
}

export default App
