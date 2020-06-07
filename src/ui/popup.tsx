import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Store from '../states/store'
import SelectManhourType from './select-manhourtype'

import '../styles/popup.css'

class Popup extends React.Component {
  render(): JSX.Element {
    return (
      <Store.Container>
        <SelectManhourType />
      </Store.Container>
    )
  }
}

ReactDOM.render(<Popup />, document.getElementById('root'))
