import React from 'react'
import {FormButton} from '../reusable/formButton'

export class miscForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is the Misc Form</h1>
        <FormButton />
      </div>
    )
  }
}
