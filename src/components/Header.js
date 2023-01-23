import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Header = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

export default Header

const styles = StyleSheet.create({
    title: {
        backgroundColor: 'white',
        height: 65,
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'OswaldRegular',
        marginBottom: 50,
    
      },
})