import { createConnectedStore, Store } from 'undux'
import { ManhourType } from './manhour-type'

type State = {
  manhourType: ManhourType
}

export default createConnectedStore<State>({
  manhourType: {
    project: '',
    task: '',
  },
})

export type StoreProps = {
  store: Store<State>
}
