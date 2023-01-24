import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import colors from '../constants/colors';

const AddItem = ({ OnAddItem, handleText, textValue }) => {

    return (
        <View style={styles.firstView}>
            <TextInput style={styles.textInput} onChangeText={handleText()} value={textValue} placeholder='Ingresa el producto' />
            <Button title='ADD' color={colors.confirmationColor} onPress={OnAddItem()} />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    firstView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textInput: {
        backgroundColor: '#fff',
        height: 40,
        width: 200,

    },
})