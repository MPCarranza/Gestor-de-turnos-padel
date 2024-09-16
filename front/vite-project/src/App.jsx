import Home from './views/Home'
import './App.css'
import MisTurnos from './views/MisTurnos';
import Register from './views/Register/Register';
import Login from './views/Login/Login'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
    return (

    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/users/login" element={ <Login/>}/>
        <Route path="/users/register" element={ <Register/>}/>
        <Route path="/appointments" element={ <MisTurnos/>}/>
    </Routes>
    </>
    
    )

}

export default App;
