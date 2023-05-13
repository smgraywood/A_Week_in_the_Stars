import './App.css'
import Home from '../../Pages/Home/Home';
import Stars from '../../Pages/Stars/Stars';
import Imagination from '../../Pages/Imagination/Imagination';
import NASAContact from '../../Pages/NASAContact/NASAContact';
import NavBar from '../NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/stars' element={<Stars/>}></Route>
          <Route path='/imagination' element={<Imagination/>}></Route>
          <Route path='/nasacontact' element={<NASAContact/>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
