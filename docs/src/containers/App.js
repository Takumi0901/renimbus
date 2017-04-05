import 'renimbus/public/css/app.css'

import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// components
import {
  Grid,
  GridCol
} from 'renimbus'

import Header from '../components/Header'

class App extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Router>
      <div>
        <Header/>
        <div className="l-wrapper">
          {this.props.children}
        </div>
      </div>
    </Router>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, {}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)