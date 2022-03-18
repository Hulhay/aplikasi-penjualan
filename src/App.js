import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Registrasi from './pages/registrasi';
import Login from './pages/login';
import NotFound from './pages/404';
import Private from './pages/private';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pengaturan/*" element={<Private />} />
        <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
