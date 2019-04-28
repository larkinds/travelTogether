import React from 'react'
import {ChunkButton} from '../reusable/chunkButton'
import {ResearchButton} from '../reusable/researchButton'
import {ExecuteButton} from '../reusable/executeButton'
import {ItineraryButton} from '../reusable/itineraryButton'

export class ProjectHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //

  render() {
    return (
      <div id="projectHome">
        <div id="projectFlowBox">
          <div id="projectSectionBox">
            <ChunkButton />
          </div>
          <div>&#8594;</div>
          <div id="projectSectionBox">
            <ResearchButton />
          </div>
          <div>&#8594;</div>
          <div id="projectSectionBox">
            <ExecuteButton />
          </div>
        </div>

        <div>
          <ItineraryButton />
        </div>
      </div>
    )
  }
}
