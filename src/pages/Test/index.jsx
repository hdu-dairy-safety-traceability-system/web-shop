import React, { Component } from 'react'

import api from '@/Request/api.js'

const hitedItem = (props) => {
  return (
    <div key={props.result.id}>
      {JSON.stringify(props.result._source)}
    </div>
  )
}

export default class Profile extends Component {
  render() {
    return (
      <div>
       
      </div>
    )
  }
}
