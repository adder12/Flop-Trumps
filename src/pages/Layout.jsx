import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar';
import Banner from '../Banner';
const Layout =() => {
    return (
        <>
        <Banner/>
        <Navbar/>
        <Outlet/>
        
        </>

    )
}


export default Layout;