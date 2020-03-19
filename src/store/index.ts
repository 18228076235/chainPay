import LoginStore, { ILoginStore } from './Login'
import AccountStore, { IAccountStore } from './Account'
import ConfigPage, { IConfigPage } from './ConfigPage'

export default {
  LoginStore,
  AccountStore,
  ConfigPage
}

export interface IStore {
  LoginStore: ILoginStore
  AccountStore: IAccountStore
  ConfigPage: IConfigPage
}
