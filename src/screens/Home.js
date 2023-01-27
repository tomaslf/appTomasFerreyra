import React from 'react'
import { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import colors from '../constants/colors';
import List from '../components/List';
import AddItem from '../components/AddItem';
import ConfirmListScreen from './ConfirmListScreen';

const Home = ({navigation}) => {

    const [list, setList] = useState([]);
    const [confirm, setConfirm] = useState(false);
    const [textItem, setTextItem] = useState('');
    const [loaded] = useFonts({
        OswaldRegular: require("../assets/fonts/Oswald-Bold.ttf"),
    })   
    
    const addItem = () => {
        if (!textItem) {
            alert('Este campo no puede estar vacío')
        } else {
            setList(currentState =>
                [...currentState, textItem])
            setTextItem('')

        }
    }
    const handleTextItem = (text) => {
        setTextItem(text)
    }

    const clearList = () => {
        setList([]);
      }
    
      const handleConfirmList = () => {
        setConfirm(true)
      }
    
      const goBack = () => {
        setConfirm(false)
      }
    
      if (!loaded) {
        return null
    }


    return (
        <View style={styles.container}>
            {
                confirm ? (
                    <>
                        <ConfirmListScreen list={list} setList={setList} />
                        <Button color={colors.deleteColor} title='Go Back' onPress={goBack} />
                    </>) :

                    (<>
                        <ImageBackground source={{ uri: "https://static.vecteezy.com/system/resources/previews/006/044/573/non_2x/vintage-bakery-background-with-sketched-bread-illustration-free-vector.jpg" }} resizeMode="cover" style={styles.image}>
                            <Header title={'Shopping List'} />
                            <AddItem OnAddItem={() => addItem} handleText={() => handleTextItem} textValue={textItem} />
                            <List list={list} setList={setList} />
                            <View style={styles.buttonContainer}>
                                <Button color={colors.deleteColor} title='Clear All' onPress={clearList} />
                                <Button color={colors.confirmationColor} title='Go Shop' onPress={handleConfirmList} />
                            </View>
                            <Button title='Go to Confirmed List' onPress={()=> navigation.navigate('ConfirmList') } />
                        </ImageBackground>
                    </>
                    )
            }

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    image: {
        flex: 1,
        paddingTop: 60
    },
    button: {
        backgroundColor: 'green',
        marginLeft: 5,
        width: 40,
        borderRadius: 20,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
    },

})