import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Compoments/Header';
import './assets/Css/root.css';
import Genius from './Compoments/Genius';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='bg_gradient'>
      <Header />
      <Routes>
        <Route path="/abc" element={<Genius />} />
      </Routes>
    </div>
  );
}

export default App;
