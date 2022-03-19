import React from 'react';

import {Navigate} from 'react-router-dom';

function PrivateRoute({ children }) {
  const auth = null;
  return auth ? children : <Navigate to="/login" />;
}


export default PrivateRoute;