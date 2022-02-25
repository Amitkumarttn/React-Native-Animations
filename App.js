import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Home from './src/screen/Home'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
})