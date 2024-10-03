import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HELLO WORLD!</Text>
      <Text style={styles.subtittle}>By: Matheus Cauã</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 50,
    fontWeight: 'bold',
    color:'white',
  },
  subtittle:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  }
});
