import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Header = () => {
  return (
    <Text style={styles.title}>Shopping List</Text>
  )
}

export default Header

const styles = StyleSheet.create({
    title: {
        backgroundColor: 'white',
        height: 60,
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'OswaldRegular',
        marginBottom: 50,
    
      },
})