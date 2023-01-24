import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import Modal from './Modal';
import AddItem from './AddItem';
import colors from '../constants/colors';



const List = ({list, setList}) => {

    const [itemSelected, setItemSelected] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [textItem, setTextItem] = useState('');
    
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

    const removeItem = (item) => {
        setList(currentState => currentState.filter(element => element !== item))
        setModalVisible(false)
    }

    const handleModal = (item) => {
        setItemSelected(item)
        setModalVisible(true)
    }






    const renderItem = ({ item }) => (
        <View style={styles.secondView}>
            <Text style={styles.textSecondView} >
                {item}
            </Text>
            <View style={styles.buttonGroup}>
                <Button title='Edit' color={colors.disableColor} onPress={() => handleModal(item)}></Button>
            </View>
            <Modal removeItemFunction={() => removeItem(itemSelected)} closeModal={() => setModalVisible(false)} modalVisibleFunction={modalVisible} itemSelected={itemSelected} />

        </View>
    )
    return (
        <View >
            <AddItem OnAddItem={() => addItem} handleText={() => handleTextItem} textValue={textItem} />
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    secondView: {
        marginTop: 30,
        marginLeft: 20,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    textSecondView: {
        fontFamily: 'OswaldRegular',
        backgroundColor: 'white',
        fontSize: 20,
        padding: 5,
        textTransform: 'uppercase',
        marginRight: 10,
        height: 45,
        width: 200,
        paddingLeft: 10,
        borderRadius: 10,

    },
    buttonGroup: {
        flexDirection: 'row',
        marginLeft: 5,
    }
})