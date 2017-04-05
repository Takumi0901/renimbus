import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {push} from 'react-router-redux'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles'

// components
import {
  Text,
  Container
} from 'renimbus'

class TextPage extends Component {
  // static propTypes = {
  //
  // }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container size={false}>
        <h1>Text</h1>
        <p><Text color={false}>Default</Text></p>
        <p><Text color={'primary'}>Primary</Text></p>
        <p><Text color={'secondary'}>Secondary</Text></p>
        <p><Text color={'info'}>Info</Text></p>
        <p><Text color={'highlight'}>Highlight</Text></p>
        <SyntaxHighlighter style={monokai}>
          {`render() {
    return (
      <Text color={false}>Default</Text>
      <Text color={'primary'}>Primary</Text>
      <Text color={'secondary'}>Secondary</Text>
      <Text color={'info'}>Info</Text>
      <Text color={'highlight'}>Highlight</Text>
    )
}`}
        </SyntaxHighlighter>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(TextPage)