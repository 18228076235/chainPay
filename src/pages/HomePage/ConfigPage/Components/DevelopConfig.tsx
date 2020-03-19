import React, { useState } from 'react'
import { useStore, observer } from 'store/utils'
import { useMount, useUnmount } from 'hooks'
interface IProps {}
const DevelopConfig = (props: IProps) => {
  useMount(() => {})
  useUnmount(() => {})

  return <div className="home m-16 16 0 16">DevelopConfig</div>
}
export default observer(DevelopConfig)
