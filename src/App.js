import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

export default () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>Hello</View>
    </Provider>
  )
}
