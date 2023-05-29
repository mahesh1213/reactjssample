import React from 'react';
import {
    Outlet
  } from 'react-router-dom';

function RightMain() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default RightMain
