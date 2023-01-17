import { StyleSheet, ImageBackground, Text, View, Button, FlatList } from 'react-native';
import { useState, useTransition } from 'react';
import Modal from './src/components/Modal';
import AddItem from './src/components/AddItem';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleTextItem = (text) => {
    setTextItem(text)
  }

  const addItem = () => {
    if (!textItem) {
      alert('Este campo no puede estar vacío')
    } else {
      setList(currentState =>
        [...currentState, textItem])
      setTextItem("")
    }
  }

  const removeItem = (item) => {
    setList(currentState => currentState.filter(element => element !== item))
    setModalVisible(false)
  }


  const renderItem = ({ item }) => (
    <View style={styles.secondView}>
      <Text  style={styles.textSecondView} >
        {item}
      </Text>
      <View style={styles.buttonGroup}>
        <Button title='Edit' color='#A4A4A4' onPress={() => handleModal(item)}></Button>
      </View>

    </View>
  )

  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const clearList = () => {
    setList([]);
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={{ uri: "https://img.freepik.com/premium-photo/shopping-trolley-shopping-cart-yellow-background_51524-21454.jpg?w=2000" }} resizeMode="cover" style={styles.image}>

        <Text style={styles.title}>Shopping List</Text>
        <AddItem OnAddItem={() => addItem} handleText={() => handleTextItem} textValue={textItem} />
        <View >
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={(item) => item.id} />
        </View>
        <Modal removeItemFunction={() => removeItem(itemSelected)} closeModal={() => setModalVisible(false)} modalVisibleFunction={modalVisible} itemSelected={itemSelected} />

        <View style={styles.clear}>
          <Button color="#9E0000" title='Clear All' onPress={clearList} />
        </View>
      </ImageBackground>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  image: {
    flex: 1,
    paddingTop: 60
  },
  title: {
    backgroundColor: 'white',
    opacity: .6,
    height: 50,
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  secondView: {
    marginTop: 30,
    marginLeft: 20,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  textSecondView: {
    backgroundColor:'white',
    fontSize: 20,
    padding:5,
    alignContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    marginRight: 10,
    height: 40,
    width: 200,
    borderRadius: 10,

  },
  buttonGroup: {
    flexDirection: 'row',
    marginLeft: 5,
  },
  button: {
    backgroundColor: 'green',
    marginLeft: 5,
    width: 40,
    borderRadius: 20,

  },
  clear: {
    color: 'red',
    marginTop: 50,
  }
});