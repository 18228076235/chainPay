import React, { SFC, memo } from 'react'
import SidebarItem from './SidebarItem'
import UserInfo from './UserInfo'
const menuList = [
  {
    url: '/app/HomePage',
    title: '首页'
  },
  {
    url: '/app/Document',
    title: '开发者文档'
  },
  {
    url: '/app/Guide',
    title: '入门指南'
  },
  {
    url: '/app/Question',
    title: '常见问题'
  }
]
const SidebarList: SFC = () => {
  return (
    <React.Fragment>
      {menuList.map(item => (
        <SidebarItem {...item} key={item.url} />
      ))}
      <UserInfo />
    </React.Fragment>
  )
}

export default SidebarList
