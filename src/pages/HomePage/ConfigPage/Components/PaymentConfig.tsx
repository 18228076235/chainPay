import React, { useState } from 'react'
import { useStore, observer } from 'store/utils'
import { useMount, useUnmount } from 'hooks'
interface IProps {}
const PaymentConfig = (props: IProps) => {
  useMount(() => {})
  useUnmount(() => {})

  return <div className="home m-16 16 0 16">支付配置</div>
}
export default observer(PaymentConfig)
