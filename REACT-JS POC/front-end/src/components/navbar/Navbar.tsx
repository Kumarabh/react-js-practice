import { NotificationsNoneOutlined } from '@mui/icons-material'
import './navbar.scss'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { KeyboardArrowDown } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="top">
          <FormatAlignLeftIcon />
          <span className='logo'>SAFETY ANALYTICS</span>
        </div>

        <div className="items">

          <div className="item">
            <NotificationsNoneOutlined />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <img src='https://cdn-icons-png.flaticon.com/512/3237/3237447.png' alt="picture" className='avatar' />
            <span className='user-details'>Admin <KeyboardArrowDown className='downarrow-icon' /></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar