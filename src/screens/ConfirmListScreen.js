import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, ImageBackground, Button } from 'react-native'
import Header from '../components/Header'
import List from '../components/List'
import colors from '../constants/colors'


const ConfirmListScreen = ({ list, setList, navigation }) => {
  
  return (
    <>
      <ImageBackground source={{ uri: "https://p0.piqsels.com/preview/933/348/32/cart-chrome-commerce-dark.jpg" }} resizeMode="cover" style={styles.image}>
        <Header title={'Go Shop'} />
        <List list={list} setList={setList} />
        <View style={styles.buttonGroup}>
          <Button title='Go Back' color={colors.deleteColor} onPress={() => navigation.navigate('Home')} />
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
  },
  buttonGroup:{
    justifyContent:'flex-end'
  }
})