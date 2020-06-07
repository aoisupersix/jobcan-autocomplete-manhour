import { createConnectedStoreAs, Store } from 'undux'
import { ManhourType } from './manhour-type'
import withChromeStorage from './with-chrome-storage'

export type State = {
  manhourType: ManhourType
}

export default createConnectedStoreAs<State>(
  {
    manhourType: {
      project: '',
      task: '',
    },
  },
  withChromeStorage
)

export type StoreProps = {
  manhourType: Store<ManhourType>
}
