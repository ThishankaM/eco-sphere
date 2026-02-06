import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'
import { SafeAreaView } from 'react-native-web'

const Routes = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})