import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';
import './App.css';
import Nav from './components/Nav';
import { useEffect } from 'react';
import appAPI from './utils/API/appAPI';

const App = () => {

  useEffect(()=>{
    appAPI.getAllContacts()
  }, [])


  return (
<Router>
  <Nav />
  <Routes>
    <Route path='/' element={<List />}/>
    <Route path='/form' element={<Form />}/>
  </Routes>
</Router>
  )
}
export default App;
