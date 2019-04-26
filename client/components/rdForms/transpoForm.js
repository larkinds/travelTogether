import React from 'react'
import {FormButton} from '../reusable/formButton'

export class transpoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is the Transpo Form</h1>
        <FormButton />
      </div>
    )
  }
}
