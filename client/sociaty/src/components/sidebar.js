import React from 'react'
import { connect } from 'react-redux'

export const sidebar = (props) => {
  return (
    <div>sidebar</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(sidebar)