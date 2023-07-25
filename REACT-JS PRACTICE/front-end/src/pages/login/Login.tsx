import React, { useState } from 'react'
import './login.scss'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { apiRequest } from '../../api/apiRequest';
import { useNavigate } from 'react-router-dom';

type Props = {}

const Login = (props: Props) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleOnSubmit: (e: any) => void = (e) => {
        e.preventDefault();
        let url ='auth/signIn';
        const payload = {
            userId, password
        };
        apiRequest({url, method: 'POST', payload: payload}).
        then((data: any) => { 
        if(data['success'])
        navigate("/dashboard"); 
        else if(!data['success']) {
            alert(data['message'])
        } else {
            alert('login failed.')
        }
      })
    }
    return (
        <div className='Login'>
            <img src="https://4kwallpapers.com/images/wallpapers/highway-light-trails-long-exposure-night-time-dusk-traffic-2880x1800-4731.jpg" alt="Paris" width="400" height="300"></img>
            <div className="container">
                <div className="login-form">
                    <h2>Hyundai Safety Analytics</h2>
                    <p>Sign-In</p>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div className='control'>
                            <div className='icon-div'>
                                <PersonOutlinedIcon className='icon' />
                            </div>
                            <input type="text" placeholder='USER ID' onChange={(e) => setUserId(e.target.value)}/>
                        </div>
                        <div className="control">
                            <div className='icon-div'>
                                <LockOutlinedIcon className='icon' />
                            </div>
                            <input type="password" placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login