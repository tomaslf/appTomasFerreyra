import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import List from '../components/List'


const ConfirmListScreen = ({ list, setList }) => {
  return (
    <>
      <ImageBackground source={{ uri: "https://p0.piqsels.com/preview/933/348/32/cart-chrome-commerce-dark.jpg" }} resizeMode="cover" style={styles.image}>
        <View>
          <Text style={styles.title}>Go Shop</Text>
          <List list={list} setList={setList} />
        </View>
      </ImageBackground>
    </>

  )
}

export default ConfirmListScreen

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    height: 65,
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'OswaldRegular',
    marginBottom: 50,
    color: 'black'
  },
  image: {
    flex: 1,
    paddingTop: 60
  }
})