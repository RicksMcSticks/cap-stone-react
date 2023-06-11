import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from './elements/Header';
import Auth from './pages/Auth';
import Bars from './pages/Bars';
import Body from './pages/Body';
import Fork from './pages/Fork';
import Home from './pages/Home';
import Pedals from './pages/Pedals';
import Suspension from './pages/Suspension';
import Tires from './pages/Tires';
import AuthContext from './store/authContext';
import { useContext } from 'react';

function App() {
  const authCtx = useContext(AuthContext)
  console.log(authCtx)
  return (
    <div >
      <Header/>
      <Routes>
        <Route index element={authCtx.userId?<Navigate to = '/home'/>:<Auth/>}/>
        <Route path='/home' element={authCtx.userId?<Navigate to = '/home'/>}/>
        <Route path='/bars' element={<Bars/>}/>
        <Route path='/body' element={<Body/>}/>
        <Route path='/fork' element={<Fork/>}/>
        <Route path='/pedals' element={<Pedals/>}/>
        <Route path='/suspension' element={<Suspension/>}/>
        <Route path='/tires' element={<Tires/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
