import React, { useContext } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { Authlogin } from '../contexts/AuthLogin';

export default function PrivateRoutes() {

  const {signed} = useContext(Authlogin)
  return signed? <Outlet/> : <Navigate to="/manager"/>

}
