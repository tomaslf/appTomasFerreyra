import { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import Header from './src/components/Header';
import Colors from './src/constants/Colors'
import AddItem from './src/components/AddItem'
import { useFonts } from 'expo-font';
import List from './src/components/List';
import ConfirmListScreen from './src/screens/ConfirmListScreen';

export default function App() {

  const [loaded] = useFonts({
    OswaldRegular: require("./src/assets/fonts/Oswald-Bold.ttf"),
  })
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
  const [confirm, setConfirm] = useState(false);

  const [list, setList] = useState([]);

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
            <Button color={Colors.deleteColor} title='Go Back' onPress={goBack} />
          </>) :

          (<>
            <ImageBackground source={{ uri: "https://static.vecteezy.com/system/resources/previews/006/044/573/non_2x/vintage-bakery-background-with-sketched-bread-illustration-free-vector.jpg" }} resizeMode="cover" style={styles.image}>
              <Header title={'Shopping List'} />
              <AddItem OnAddItem={() => addItem} handleText={() => handleTextItem} textValue={textItem} />
              <List list={list} setList={setList} />
              <View style={styles.buttonContainer}>
                <Button color={Colors.deleteColor} title='Clear All' onPress={clearList} />
                <Button color={Colors.confirmationColor} title='Go Shop' onPress={handleConfirmList} />
              </View>
            </ImageBackground>
          </>
          )
      }

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

});