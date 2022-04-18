import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Services from './Pages/Home/Services/Services';
import Header from './Pages/Shared/Header/Header';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='/register' element= {<Register></Register>}/>
    <Route path='/checkout/:serviceId' element ={
      <RequireAuth>
        <Checkout/>
      </RequireAuth>
    }></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
