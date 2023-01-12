import { StyleSheet,Button, Text, View, Modal as NewModal } from 'react-native'
import React from 'react'

const Modal = ({modalVisibleFunction,removeItemFunction,itemSelected,closeModal }) => {
    return (
        <NewModal animationType='fade'
            transparent={true}
            visible={modalVisibleFunction}>
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.modalText}>
                        Delete {itemSelected}?
                    </Text>
                   
                    <Button style={styles.buttons} color="#9E0000" title='Delete' onPress={()=> removeItemFunction()} />
                    <Button title='Cancel' onPress={closeModal}></Button>
        
                    
                </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        
      },
      modal: {
        height: 200,
        width: 250,
        padding:20,
        backgroundColor: 'black',
      },
      modalText: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 20,
      },
})