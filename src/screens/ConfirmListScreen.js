import React from 'react'
import { StyleSheet, View, ImageBackground, Button } from 'react-native'
import List from '../components/List'
import Header from '../components/Header'


const ConfirmListScreen = ({ list, setList, navigation }) => {
  return (
    <>
      <ImageBackground source={{ uri: "https://p0.piqsels.com/preview/933/348/32/cart-chrome-commerce-dark.jpg" }} resizeMode="cover" style={styles.image}>
        <View>
          <Header title={'Go Shop'} />
          <List list={list} setList={setList} />
        </View>
        <Button title='Go Home' onPress={()=> navigation.navigate('Home') } />
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