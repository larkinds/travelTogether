import React from 'react'
import {FormButton} from '../reusable/formButton'

export class lodgingForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>This is the Lodging Form</h1>
        <FormButton />
      </div>
    )
  }
}
