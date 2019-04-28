import React from 'react'
import {Link} from 'react-router-dom'

export class ChunkButton extends React.Component {
  render() {
    return (
      <div className="chunkButton">
        <Link to="/chunk">Chunk</Link>
      </div>
    )
  }
}
