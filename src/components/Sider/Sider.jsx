import React from 'react'
import './Sider.scss'
// import {UserAddOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom"
// import Title from 'antd/lib/typography/Title';


const Siders = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
         
          <Link to="/" style={{ textDecoration: "none" }}>
          <span className='admin'>Admin</span>
          </Link>

            <span className='logo'>Dashboard</span>
        </div>
        <div className='center'>
            <ul>
                <li>
                <Link to="/users" style={{ textDecoration: "none" }}>
                    {/* <UserAddOutlined/> */}
                    <img src='../users.png' className='user-logo' alt='...'/>
                    <span>Users</span>
                 </Link>   
                </li>


                <li>
                <Link to="/employee" style={{ textDecoration: "none" }}>
                    {/* <UserAddOutlined/> */}
                    <img src='../employee.png' className='employee-logo' alt='...'/>
                    <span>Employee</span>
                 </Link>
                </li>


                <li>
                <Link to="/news" style={{ textDecoration: "none" }}>
                    {/* <UserAddOutlined/> */}
                    <img src='../news.png' className='news-logo' alt='...'/>
                    <span>News</span>
                 </Link>
                </li>
            </ul>
        
        </div>
        
      
    </div>
  )
}

export default Siders;
