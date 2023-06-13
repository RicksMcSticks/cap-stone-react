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
        <Route path='/home' element={authCtx.userId? <Home/> : <Navigate to='/'/>}/>
        <Route path='/bars' element={authCtx.userId? <Bars/> : <Navigate to='/'/>}/>
        <Route path='/body' element={authCtx.userId? <Body/> : <Navigate to='/'/>}/>
        <Route path='/fork' element={authCtx.userId? <Fork/> : <Navigate to='/'/>}/>
        <Route path='/pedals' element={authCtx.userId? <Pedals/> : <Navigate to='/'/>}/>
        <Route path='/suspension' element={authCtx.userId? <Suspension/> : <Navigate to='/'/>}/>
        <Route path='/tires' element={authCtx.userId? <Tires/> : <Navigate to='/'/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
