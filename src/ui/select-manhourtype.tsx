import React from 'react'
import { FormControl, TextField, Typography } from '@material-ui/core'
import Store, { StoreProps } from '../states/store'

class SelectManhourType extends React.Component<StoreProps> {
  render(): JSX.Element {
    const { store } = this.props
    return (
      <div className="popup-padded">
        <Typography>ジョブカン工数自動入力</Typography>
        <hr />
        <FormControl margin="normal">
          <TextField
            label="プロジェクト"
            id="autocomplete-projectname"
            value={store.get('manhourType').project}
          />
          <TextField
            label="タスク"
            id="autocomplete-taskname"
            value={store.get('manhourType').task}
          />
        </FormControl>
      </div>
    )
  }
}

export default Store.withStore(SelectManhourType)
