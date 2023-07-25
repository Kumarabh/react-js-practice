import React from 'react'
import './home.scss';
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom';

type Props = {}

const Home = (props: Props) => {

    return (
        <div className='home'>
            <Navbar />
            <div className="container">
                <div className="container-l">
                    <Sidebar />
                </div>
                <div className="container-r">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home
