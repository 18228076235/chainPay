import React from 'react'
import Loadable from 'react-loadable'
export interface IRouterItem {
  key: string
  name: string
  path: string
  component:
    | (React.ComponentClass<{}, any> & Loadable.LoadableComponent)
    | (React.FunctionComponent<{}> & Loadable.LoadableComponent)
  children?: IRouterItem[]
}

const RouterConfigs: any[] = [
  {
    key: 'true',
    name: '首页',
    path: '/app/HomePage',
    component: Loadable({
      loader: () => import('pages/HomePage'),
      loading: () => null
    }),
    children: []
  },
  {
    name: '登陆',
    path: '/app/login',
    component: Loadable({
      loader: () => import('pages/Login'),
      loading: () => null
    })
  }
]
export default RouterConfigs
