import React from 'react'

export class ChunkAssignments extends React.Component {
  render() {
    return (
      <div className="chunkAssignments">
        <select name="arena">
          <option value="Activities">Activities</option>
          <option value="Lodging">Lodging</option>
          <option value="Misc">Misc. Details</option>
          <option value="Restaurants">Restaurants & Bars</option>
          <option value="Transpo">Transportation</option>
        </select>
      </div>
    )
  }
}
