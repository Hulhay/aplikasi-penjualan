import React from 'react';
import {BrowserRouter, Route, Routes, Outlet, Navigate} from 'react-router-dom';

import Registrasi from './pages/registrasi';
import Login from './pages/login';
import NotFound from './pages/404';
import Pengguna from './pages/private/pengaturan/pengguna';
import Toko from './pages/private/pengaturan/toko';
import GridProduk from './pages/private/produk/grid';
import EditProduk from './pages/private/produk/edit';
import Home from './pages/private/home';
import Transaksi from './pages/private/transaksi';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<PrivateRoute><Home /></ PrivateRoute>} />
        <Route path="transaksi" element={<PrivateRoute><Transaksi /></PrivateRoute>} />
        
        <Route path="pengaturan" element={<PrivateRoute><Outlet /></PrivateRoute>} >
          <Route path="pengguna" element={<Pengguna />} />
          <Route path="toko" element={<Toko />} />
        </Route>

        <Route exact path="produk" element={<><Navigate to="grid" /><Outlet />< />} >
          <Route path="grid" element={<GridProduk />} />
          <Route path="edit/:produkId" element={<EditProduk />} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
