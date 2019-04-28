import React from 'react'
import {Link} from 'react-router-dom'

export class ExecuteButton extends React.Component {
  render() {
    return (
      <div className="executeButton">
        <Link to="/execute">Execute</Link>
      </div>
    )
  }
}
