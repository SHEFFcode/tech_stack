import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native'
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
  componentWillUpdate = (nextProps, nextState) => {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { library, expanded } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const {
      library: {
        item: { id, title },
      },
      selectLibrary,
    } = this.props
    const { titleStyle } = styles

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id

  return { expanded }
}

export default connect(
  mapStateToProps,
  actions,
)(ListItem)
