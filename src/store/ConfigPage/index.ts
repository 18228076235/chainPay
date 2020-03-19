/*
 * @Author: shiyao you
 * @Date: 2019-11-26 17:28:36
 * @Last Modified by: shiyao you
 * @Last Modified time: 2019-12-02 16:13:44
 */
import { AccountServer } from 'server'
import { observable, action, lockAsync, computed } from '../utils'
import { message } from 'antd'

class ConfigPage {
  @observable current: number = 0

  @action.bound
  setCurrent(index: number) {
    this.current = index
  }
}
export default new ConfigPage()
export interface IConfigPage extends ConfigPage {}
