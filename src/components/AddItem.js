import { StyleSheet,View, TextInput,Button } from 'react-native'
import React from 'react'

const AddItem = ({OnAddItem,handleText,textValue}) => {
    return (
        <View style={styles.firstView}>
            <TextInput style={styles.textInput} onChangeText={handleText()} value={textValue} placeholder='Ingresa el producto' />
            <Button title='ADD' color={'#18B205'} onPress={OnAddItem()} />
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