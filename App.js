import { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, Button } from 'react-native';
import AddItem from './src/components/AddItem';
import Colors from './src/constants/Colors'
import { useFonts } from 'expo-font';
import List from './src/components/List';
import ConfirmListScreen from './src/screens/ConfirmListScreen';

export default function App() {

  const [loaded] = useFonts({
    OswaldRegular: require("./src/assets/fonts/Oswald-Bold.ttf"),
  })

  const [list, setList] = useState([]);

  const clearList = () => {
    setList([]);
}
  const handleConfirmList= ()=>{
    
  }

  
  if (!loaded) {
    return null
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={{ uri: "https://static.vecteezy.com/system/resources/previews/006/044/573/non_2x/vintage-bakery-background-with-sketched-bread-illustration-free-vector.jpg" }} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Shopping List</Text>
        
        <List list={list} setList={setList} />
        <View style={styles.buttonContainer}>
          <Button color={Colors.deleteColor} title='Clear All' onPress={clearList} />
          <Button color={Colors.confirmationColor} title='Confirm List' onPress={handleConfirmList} />
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
    height: 60,
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'OswaldRegular',
    marginBottom: 50,

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
  }
});