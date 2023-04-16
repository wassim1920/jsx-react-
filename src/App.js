import './App.css';
import React from 'react';
import ProfilePhoto from './Component/ProfilePhoto';
import FullName from './Component/FullName';
import Address from './Component/Address';

function App() {
  return (
    <div>
      <ProfilePhoto/>
      <FullName />
      <Address/>
    </div>
  );
}

export default App;
