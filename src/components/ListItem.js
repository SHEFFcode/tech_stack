import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from '../common'
import * as actions from '../actions'

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 18,
  },
}

class ListItem extends Component {
  render() {
    const { library } = this.props
    const { titleStyle } = styles

    return (
      <CardSection>
        <Text style={titleStyle}>{library.item.title}</Text>
      </CardSection>
    )
  }
}

export default connect(
  null,
  actions,
)(ListItem)
