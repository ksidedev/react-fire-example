import React, { Component } from 'react'

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        Dashboard. This is a protected content. You can only see this if you're logged in.
      </div>
    )
  }
}