import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));

const App = () => (
  <section>
    <Suspense fallback={<p className="loading">Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  </section>
);

export default App;
