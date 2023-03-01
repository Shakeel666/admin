import React from 'react'
// import { Avatar, Layout } from 'antd';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationAddOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutline'
import ListOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import {SearchOutlined} from '@ant-design/icons'
import { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
// import Title from 'antd/lib/typography/Title';
// import { Link } from 'react-router-dom';
import './Navbar.scss'


// const { Header } = Layout;


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="../sa.png"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>



      {/* <Layout>
        <Header style={{padding: '15px'}}>
        <Avatar style={{float: 'right'}} src='../dp.png'/>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Title style={{color: 'white', margin: '0px'}} level={3}>Admin</Title>
        </Link>
        
        </Header>
        
    </Layout> */}
      
    </div>
  )
}

export default Navbar;
