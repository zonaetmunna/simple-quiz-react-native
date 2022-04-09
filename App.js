import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home';
import Quiz from './src/screens/Quiz/Quiz';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home></Home> */}
      <Quiz></Quiz>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
