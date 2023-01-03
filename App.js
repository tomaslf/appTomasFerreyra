import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Text style={styles.textColor}>Hola Coder!!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.secondView}>
        <Text style={styles.textColor}>Proximamente Nueva App</Text>
      </View>
      <View style={styles.thirdView}>
        <Image style={styles.img} source={{ uri: "https://res.cloudinary.com/hdsqazxtw/image/upload/v1600707758/coderhouse-logo.png" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C5B5A',

    justifyContent: 'center',
  },
  textColor: {
    color: 'white',
    fontWeight: '500',
  },
  firstView: {
    flex: 2,
    backgroundColor: '#5B352C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondView: {
    flex: 2,
    backgroundColor: '#3F5B2C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thirdView: {
    flex: 2,
    backgroundColor: '#5B352C'
  },
  img: {
    width: '100%',
    height: '100%',

  }
});