import React from 'react'
import {ChunkButton} from '../reusable/chunkButton'

export class projectHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //

  render() {
    return (
      <div id="projectHome">
        <div>
          <h1>Step 1</h1>
          <ChunkButton />
        </div>
      </div>
    )
  }
}
