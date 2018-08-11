import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from '../common'

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
    console.log(library)

    return (
      <CardSection>
        <Text style={titleStyle}>{library.item.title}</Text>
      </CardSection>
    )
  }
}

export default ListItem