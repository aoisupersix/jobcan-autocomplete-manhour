import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FormControl, TextField, Typography } from '@material-ui/core'

import '../styles/popup.css'

class Hello extends React.Component {
  render(): JSX.Element {
    return (
      <div className="popup-padded">
        <Typography>ジョブカン工数自動入力</Typography>
        <hr />
        <FormControl margin="normal">
          <TextField label="プロジェクト" id="autocomplete-projectname" />
          <TextField label="タスク" id="autocomplete-taskname" />
        </FormControl>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
