import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import Sider from "../../components/Sider/Sider"
import Datatable from "../../components/Users/Userdata"
import "./List.scss"


const List = () => {
  return (
    <div className="list">
      <Sider/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List;