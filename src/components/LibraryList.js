import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class LibraryList extends Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    )
  }
}

mapStateToProps = ({ libraries }) => {
  return { libraries }
}

export default connect(mapStateToProps)(LibraryList)
