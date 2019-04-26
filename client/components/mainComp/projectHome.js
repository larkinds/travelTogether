import React from 'react'
import {ChunkButton} from '../reusable/chunkButton'
import {ResearchButton} from '../reusable/researchButton'
import {ExecuteButton} from '../reusable/executeButton'
import {ItineraryButton} from '../reusable/itineraryButton'

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
          <h1>Step 1: </h1>
          <ChunkButton />
        </div>
        <div>
          <h1>Step 2: </h1>
          <ResearchButton />
        </div>
        <div>
          <h1>Step 3: </h1>
          <ExecuteButton />
        </div>
        <div>
          <div>Itinerary:</div>
          <ItineraryButton />
        </div>
      </div>
    )
  }
}
