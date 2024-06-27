import React from 'react'

function Child2Operations(props) {

  return (
    <div>
        <div>
            <h1>Operations Details</h1>
            <div>
                {props.info? props.info : "NO OPERATTIONS PERFORMED YET!!!!"}
            </div>
        </div>
    </div>
  )
}

export default Child2Operations