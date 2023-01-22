import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import List from '../components/List'


const ConfirmListScreen = ({list, setList}) => {
  return (
   <View>
    <Text>Estos son los productos seleccionados</Text>
    <List list={list} setList={setList} />
   </View>
  )
}

export default ConfirmListScreen

const styles = StyleSheet.create({})