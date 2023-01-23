import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import List from '../components/List'
import Header from '../components/Header'


const ConfirmListScreen = ({ list, setList }) => {
  return (
    <>
      <ImageBackground source={{ uri: "https://p0.piqsels.com/preview/933/348/32/cart-chrome-commerce-dark.jpg" }} resizeMode="cover" style={styles.image}>
        <View>
          <Header title={'Go Shop'} />
          <List list={list} setList={setList} />
        </View>
      </ImageBackground>
    </>

  )
}

export default ConfirmListScreen

const styles = StyleSheet.create({
  image: {
    flex: 1,
    paddingTop: 60
  }
})