import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Pengguna from './pengguna';
import Toko from './toko';

function Pengaturan() {

	return (
		<Routes>
			<Route path="/pengguna" element={<Pengguna />} />
			<Route path="/toko" element={<Toko />} />
			<Route path="*" element={<Navigate to="pengguna" />} />
		</Routes>
	)

}

export default Pengaturan;