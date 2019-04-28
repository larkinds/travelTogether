import React from 'react'
import {ChunkAssignments} from '../reusable/chunkAssignments'
import {PeopleChooser} from '../reusable/peopleChooser'

export class chunkHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chunk: this.chunk,
      leader: this.leader,
      helpers: this.helper
    }
  }

  //hook up buttons to set state! Figure out how to set multiple helpers
  //figure out how to map through the different chunks so that once you've submitted one, you move onto the next

  render() {
    return (
      <div id="chunkHome">
        <div>
          <h1>Chunk</h1>
          <h2>Type: </h2>
          <ChunkAssignments />
        </div>
        <div>
          <h2>Assign Leader: </h2>
          <PeopleChooser />
        </div>
        <div>
          <h2>Assign Helper:</h2>
          <PeopleChooser />
        </div>
        <div>Assign Date</div>
        <button type="submit">Submit</button>
      </div>
    )
  }
}
