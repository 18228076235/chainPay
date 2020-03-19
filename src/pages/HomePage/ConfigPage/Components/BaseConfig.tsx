import React, { useState } from 'react'
import { useStore, observer } from 'store/utils'
import { useMount, useUnmount } from 'hooks'
interface IProps {}
const BaseConfig = (props: IProps) => {
  useMount(() => {})
  useUnmount(() => {})

  return <div className="home m-16 16 0 16">BaseConfig</div>
}
export default observer(BaseConfig)
