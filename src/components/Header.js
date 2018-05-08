import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4286f4',
    paddingHorizontal: 16,
    paddingTop: 46,
    paddingBottom: 16,
    alignItems: 'center'
  },
  headerText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
})

export default Header