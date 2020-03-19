import React, { useState } from 'react'
import { Button, Card } from 'antd'
import './index.scss'
import { useStore, observer } from 'store/utils'
import { useMount, useUnmount } from 'hooks'
import { getObserverTree } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router'
import QUNoData from 'components/QUNoData'

const HomePage = (props: RouteComponentProps) => {
  const { HomePageStore } = useStore()

  function goToPage() {
    props.history.push(`/app/HomePage/ConfigPage`)
  }

  useMount(() => {})
  useUnmount(() => {})

  return (
    <div className="home m-16 16 0 16">
      <div className="flex">
        <Card
          className="mr-20 flex_2"
          title={<b>我的应用</b>}
          extra={<Button onClick={goToPage}>创建应用</Button>}
        >
          <QUNoData text="" />
        </Card>
        <Card className="flex_1" title={<b>公告</b>} extra={<a>更多</a>}>
          111
          <QUNoData text="" />
        </Card>
      </div>
    </div>
  )
}
export default withRouter(observer(HomePage))
