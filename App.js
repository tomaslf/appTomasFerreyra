import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList, Modal } from 'react-native';
import { useState, useTransition } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState ('');
  const [modalVisible, setModalVisible] = useState (false);

  const handleTextItem = (text) => {
    setTextItem(text)
  }
  const addItem = () => {
    if (textItem === ""){
      alert('Este campo no puede estar vacío')
    }else{
      setList(currentState => 
        [...currentState, textItem])
  
      setTextItem("")
    }
  }
  const renderItem = ({ item }) => (
    <View style={styles.secondView}>
      <Text style={styles.textSecondView}>
        {item}
      </Text>
      <Button title='Edit' onPress={() => setModalVisible(true)}></Button>
    </View>
  )
  

  const removeItem = () =>{
    setList([]);
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Recetas</Text>
      <View style={styles.firstView}>
        <TextInput style={styles.textInput} onChangeText={handleTextItem} value={textItem} placeholder='Ingresa el ingrediente' />
        <Button title='ADD' onPress={addItem} />
      </View>
      <View >
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id} />
      </View>
      <Modal style={styles.modal} animationType='fade'
      transparent={true}
      visible={modalVisible}>
        <View>
            <Text>
                {itemSelected}
            </Text>
            <Button style={styles.Button} title='Delete' onPress={removeItem}/>
          
        </View>

      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C5B5A',

    paddingTop: 60,
  },
  title: {
    height: 50,
    textAlign: 'center',
    fontSize: 35,
    marginBottom: 5,
  },
  firstView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  textInput: {
    backgroundColor: '#fff',
    height: 35,
    width: 130,

  },
  secondView: {
    marginTop: 30,
    marginLeft: 20,
    flex: 2,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
  textSecondView: {
    fontSize: 20,
    textTransform: 'uppercase',
    marginRight: 10,
  },
  modal:{
    alignItems:'center'
    ,width: 50, 
  }
});