import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />
  }
  render() {
    const { libraries } = this.props

    return (
      <FlatList
        data={libraries}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={library => library.id}
      />
    )
  }
}

mapStateToProps = ({ libraries }) => {
  return { libraries }
}

export default connect(mapStateToProps)(LibraryList)
