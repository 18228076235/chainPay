import React, { useState } from 'react'
import { Button, Card, Steps } from 'antd'
import './index.scss'
import { useStore, observer } from 'store/utils'
import { useMount, useUnmount } from 'hooks'
import { getObserverTree } from 'mobx'
import { withRouter, RouteComponentProps } from 'react-router'
import ApplicationSign from './Components/ApplicationSign'
import Online from './Components/Online'
import PaymentConfig from './Components/PaymentConfig'
import BaseConfig from './Components/BaseConfig'
import DevelopConfig from './Components/DevelopConfig'

const { Step } = Steps
const steps = [
  {
    title: '基本配置',
    content: <BaseConfig />
  },
  {
    title: '开发配置',
    content: <DevelopConfig />
  },
  {
    title: '支付配置',
    content: <PaymentConfig />
  },
  {
    title: '应用签约',
    content: <ApplicationSign />
  },
  {
    title: '上线',
    content: <Online />
  }
]
const ConfigPage = (props: RouteComponentProps) => {
  const { ConfigPage } = useStore()
  const { current } = ConfigPage
  useMount(() => {})
  useUnmount(() => {})

  return (
    <div>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current]?.content}</div>
    </div>
  )
}
export default withRouter(observer(ConfigPage))
