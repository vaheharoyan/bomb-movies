import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';


const App = () => (
  <section>
     <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </section>
);

export default App;
