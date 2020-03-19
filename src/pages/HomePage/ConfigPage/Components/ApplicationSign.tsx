import React, { useState } from 'react'
import { useStore, observer } from 'store/utils'
import { useMount, useUnmount } from 'hooks'
interface IProps {}
const ApplicationSign = (props: IProps) => {
  useMount(() => {})
  useUnmount(() => {})

  return <div className="home m-16 16 0 16">签约应用</div>
}
export default observer(ApplicationSign)
