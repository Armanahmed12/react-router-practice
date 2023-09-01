import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header className='h-50 d-inline-block'></Header>
            <Outlet />
        </div>
    );
};

export default Main;