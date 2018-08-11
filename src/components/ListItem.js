import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
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
    const {
      library,
      library: {
        item: { id, title },
      },
      selectLibrary,
    } = this.props
    const { titleStyle } = styles

    console.log(this.props)

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect(
  null,
  actions,
)(ListItem)
