import React from 'react'

import {Link} from 'react-router-dom'

export default () => {
  return (
        <div className="newC">
            <Link to={"/add"}>
                <i className="fas fa-plus"></i>
                <p>New course</p>
            </Link>
        </div>
  )
}
