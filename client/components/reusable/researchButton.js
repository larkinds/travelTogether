import React from 'react'
import {Link} from 'react-router-dom'

export class ResearchButton extends React.Component {
  render() {
    return (
      <div className="researchButton">
        <Link to="/research">Research</Link>
      </div>
    )
  }
}
