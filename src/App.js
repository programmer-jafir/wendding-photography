import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Regester from './Pages/Register/Register';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='/register' element={<Regester></Regester>}/>
      </Routes>
    </div>
  );
}

export default App;
