import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from '../common'

class ListItem extends Component {
  render() {
    const { library } = this.props
    console.log(library)

    return (
      <CardSection>
        <Text>{library.item.title}</Text>
      </CardSection>
    )
  }
}

export default ListItem
