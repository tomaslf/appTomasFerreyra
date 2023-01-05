import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.firstView}>
          <TextInput style={styles.textInput} placeholder='Escribe tu producto' />
          <Button title='ADD' />
      </View>
      <View style={styles.secondView}>
        <Image style={styles.img} source={{ uri: "https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#2C5B5A',
    
    paddingTop:60,
  },
  title:{
    height:50,
    textAlign:'center',
  },
  firstView:{
    flexDirection: 'row',
    justifyContent:'space-evenly'
  },
  textInput:{
    backgroundColor:'#fff',
    height: 35,
    width: 130,
    
  },
  img: {

    marginTop:20,
    width: '100%',
    height: 250,

  }
});