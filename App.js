import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import TxtComponent from './src/components/TxtComponents';
import TouchComponents from './src/components/TouchComponent';

alert

export default function App() {
  return (
    <View>
    <View style={styles.container}>
     <TxtComponent>
     <Text>oi</Text> 
      <Text>eu</Text> 
      <Text>oi</Text> 
      </TxtComponent>
      </View>


     <TouchComponents>
        <Text> Click here!</Text>
     </TouchComponents>


     <TouchComponents>
     <Image 
                source={require('./src/assets/images/botão.jpg')} 
                style={styles.image1}
                resizeMode='cover'
            />
     </TouchComponents>

     <TouchComponents>
      <Text> Finale here! É isso fml flw tmjt</Text>
     </TouchComponents>

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
