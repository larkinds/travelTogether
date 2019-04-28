import React from 'react'

export class PeopleChooser extends React.Component {
  render() {
    return (
      <div>
        <select name="people" multiple>
          <option value="Larkin">Larkin</option>
          <option value="Jesse">Jesse</option>
          <option value="Ann">Ann</option>
          <option value="Aly">Aly</option>
          <option value="Priyanka">Priyanka</option>
        </select>
      </div>
    )
  }
}
