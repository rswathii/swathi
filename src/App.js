
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import Favourite from './Components/Favourite';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<AddStudent/>}/>
            <Route path="/favourite" element={<Favourite/>}/>
        </Routes>
    </div>
  );
}

export default App;
