import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/home';
import Register from './Pages/Register/register'
import Login from './Pages/Login/login'
import ContactsAdd from './Pages/ContactsNew/contactsAdd'
import Contacts from './Pages/Contacts/contacts'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/contacts/new' element={<ContactsAdd/>} />
      <Route path='/contacts' element={<Contacts/>} />
    </Routes>
    </>
  )
}

export default App
