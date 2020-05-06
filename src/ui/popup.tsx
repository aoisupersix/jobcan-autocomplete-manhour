import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '../styles/popup.css'

class Hello extends React.Component {
  render(): JSX.Element {
    return (
      <div className="popup-padded">
        <h1>ジョブカン工数自動入力</h1>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
