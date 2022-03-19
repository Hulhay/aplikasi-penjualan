import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Registrasi from './pages/registrasi';
import Login from './pages/login';
import NotFound from './pages/404';
import Pengaturan from './pages/private/pengaturan';
import Pengguna from './pages/private/pengaturan/pengguna';
import Toko from './pages/private/pengaturan/toko';
import Produk from './pages/private/produk';
import GridProduk from './pages/private/produk/grid';
import EditProduk from './pages/private/produk/edit';
import Home from './pages/private/home';
import Transaksi from './pages/private/transaksi';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
        <Route path="transaksi" element={<Transaksi />} />
        
        <Route path="pengaturan" element={<Pengaturan />} >
          <Route path="pengguna" element={<Pengguna />} />
          <Route path="toko" element={<Toko />} />
        </Route>

        <Route path="produk" element={<Produk />} >
          <Route path="grid" element={<GridProduk />} />
          <Route path="edit/:produkId" element={<EditProduk />} />
        </Route>
      
      </Routes>
    </Router>
  );
}

export default App;
