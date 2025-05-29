import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Componant/Nav';
import Footer from '../Componant/Footer';

const Root = () => {
    return (
        <div className='max-w-9/12 mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;