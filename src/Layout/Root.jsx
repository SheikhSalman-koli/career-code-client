import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Componant/Nav';
import Footer from '../Componant/Footer';

const Root = () => {
    return (
        <div className='lg:max-w-9/12 lg:mx-auto px-4 lg:px-0 space-y-6'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;