import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import MapComponent from "../components/MapComponent";
import '../index.css'; 

const Navigation = () => {
    return ( <div className="Navigation_screen">

<Navbar id={4}/>
      <Topbar />
            <MapComponent />
    </div>
    );
}
 
export default Navigation;