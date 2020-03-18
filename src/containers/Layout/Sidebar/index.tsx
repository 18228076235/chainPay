import React, { SFC, useState } from 'react'
import SidebarList from './SidebarList'
import './index.scss'
import QUIcon from 'components/QUIcon'
const Sidebar: SFC = () => {
  return (
    <div className="ngLayout_sidebar-default">
      <div className="sidebar_item_logo flex">
        <img
          src="https://dss0.baidu.com/73F1bjeh1BF3odCf/it/u=3140586936,2107340406&fm=85&s=03D7036E4F73169A4C2D74150300C0D0"
          alt=""
        />
        <h1 className="ml-20">ChainPay X</h1>
      </div>
      <div className="ngLayout_sidebar_menu flex">
        <SidebarList />
      </div>
    </div>
  )
}

export default Sidebar
