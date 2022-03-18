import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Pengaturan from './pengaturan';
// import Toko from './pengaturan/toko';

function Private() {

	return (

		<Routes>
			<Route path="/*" element={<Pengaturan />} />
		</Routes>
	)

}

export default Private;