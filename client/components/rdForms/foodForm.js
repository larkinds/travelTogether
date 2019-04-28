import React from 'react'
import {FormButton} from '../reusable/formButton'
// import * as admin from 'firebase-admin'

// var database = firebase.database()

export class foodForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //

  render() {
    return (
      <div id="foodRDForm">
        <h1>This is the Food Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Name">Restaurant Name:</label>
          <input name="foodName" type="text" onChange={this.handleChange} />
          <label htmlFor="Decription">Description:</label>
          <textarea
            id="foodDesc"
            name="foodDesc"
            onChange={this.handleChange}
          />
          <label htmlFor="Price">Price Range - $ to $$$:</label>
          <input name="foodName" type="text" onChange={this.handleChange} />

          <label htmlFor="Neighborhood">Neighborhood:</label>
          <input name="foodAddress" type="text" onChange={this.handleChange} />
          <label htmlFor="Address">Address:</label>
          <input name="foodAddress" type="text" onChange={this.handleChange} />
          <label htmlFor="Photos">Photos:</label>
          <input name="foodPhotos" type="text" onChange={this.handleChange} />
          <label htmlFor="Website">Website:</label>
          <input name="foodWebsite" type="url" onChange={this.handleChange} />
        </form>
        <FormButton />
      </div>
    )
  }
}

//change price to 4 buttons - $ to $$$$
//two buttons - save and submit/rank
