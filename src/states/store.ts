import { createConnectedStore, Store } from 'undux'
import { ManhourType } from './manhour-type'
import withChromeStorage from './with-chrome-storage'

export type State = {
  manhourType: ManhourType
}

export default createConnectedStore<State>(
  {
    manhourType: {
      project: '',
      task: '',
    },
  },
  withChromeStorage
)

export type StoreProps = {
  store: Store<State>
}
