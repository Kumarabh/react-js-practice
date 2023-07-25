import { useEffect } from 'react';
import './sidebar.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSideBar } from '../../redux/features/SideBarReducer';
import { apiRequest } from '../../api/apiRequest';
import { KeyboardArrowDown } from '@mui/icons-material';
const Sidebar = () => {

    const userDispatcher = useDispatch();

    useEffect(() => {
        apiRequest({ url: 'side-bar', method: 'GET' }).
            then((data: any) => {
                userDispatcher(setSideBar(data))
            })
    }, [])

    const dataResult = useSelector((state: any) => state.SideBarReducer.value);

    return (
        <div className='sidebar'>
            <div className="center">

                {
                    dataResult?.map((ulelement: any, index: number) => {
                        return (
                            <ul className='ul-item' key={index}>
                                <li className={window.location.pathname === '/' + ulelement.link ? 'li-item active' : 'li-item'} style={{ paddingLeft: '15px' }}>
                                    <span><Link to={ulelement.link}>{ulelement.title}</Link></span><KeyboardArrowDown className='dropdown-icon' />
                                </li>

                                {
                                    ulelement.subLinks.map((lielement: any, index: number) => {
                                        return (
                                            <li key={index} className={window.location.pathname === '/' + lielement.link ? 'li-item active' : 'li-item'} style={{ paddingLeft: '15px' }}>
                                                <span><Link to={lielement.link}>{lielement.title}</Link></span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Sidebar

