import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function App() {
  return(
    <NavigationContainer>
      <Stack.Naviagtor initialRouteName = "Home" screenOptions = {{
        headerShown: false
      }}>
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
        <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
        <Stack.Screen name = "StarMap" component = {StarMapScreen}/>

      </Stack.Naviagtor>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
