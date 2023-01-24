import React from 'react'
import { StyleSheet, Button, Text, View, Modal as NewModal } from 'react-native'
import colors from '../constants/colors';


const Modal = ({ modalVisibleFunction, removeItemFunction, itemSelected, closeModal }) => {
  return (
    <NewModal animationType='fade'
      transparent={true}
      visible={modalVisibleFunction}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            Delete {itemSelected}?
          </Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.deleteButton} color={colors.deleteColor} title='Delete' onPress={() => removeItemFunction()} />
            <Button title='Cancel' color={colors.disableColor} onPress={closeModal}></Button>
          </View>

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
    width: 250,
    padding: 20,
    backgroundColor: 'black',
  },
  modalText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
})