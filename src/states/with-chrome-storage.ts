import { Effects } from 'undux'
import { State } from './store'

const withChromeStorage: Effects<State> = (store) => {
  store.onAll().subscribe(({ key, value }) => {
    console.log('save to storage')
    console.log(`key: ${key}, value: ${value}`)
  })

  return store
}

export default withChromeStorage
