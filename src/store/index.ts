import LoginStore, { ILoginStore } from './Login'
import AccountStore, { IAccountStore } from './Account'

export default {
  LoginStore,
  AccountStore
}

export interface IStore {
  LoginStore: ILoginStore
  AccountStore: IAccountStore
}
