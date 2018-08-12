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
  renderDescription() {
    const { library, selectedLibraryId } = this.props
    console.log(library.item.description)

    if (library.item.id == selectedLibraryId) {
      return <Text>{library.item.description}</Text>
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

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(
  mapStateToProps,
  actions,
)(ListItem)
