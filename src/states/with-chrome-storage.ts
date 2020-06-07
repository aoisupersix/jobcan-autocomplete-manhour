import { EffectsAs } from 'undux'
import { State } from './store'

const withChromeStorage: EffectsAs<State> = (store) => {
  store.manhourType.onAll().subscribe(({ key, value }) => {
    console.log('save to storage')
    console.log(`key: ${key}, value: ${value}`)
  })

  return store
}

export default withChromeStorage
