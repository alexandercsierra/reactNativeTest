// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, StatusBar, Alert, Button, SafeAreaView, Platform} from 'react-native';

export default function App() {

  const handlePress = ()=>console.log('pressed')

  return (
    // can pass in an array of objects to style as well
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native make this really long on purpose to see how it might wrap or not to test the props available.</Text>
      {/* <Image source={require('./assets/icon.png')}/> */}
      {/* loadingIndicatorSource (android only) can specify a local image to display while the real one is loading */}
      {/* fadeDuration only works on android, fades the image in on load */}


      {/* <TouchableOpacity onPress={()=>console.log('image tapped')}>
        <Image fadeDuration={1000} blurRadius={10} source={{width: 200, height: 300, uri: "https://picsum.photos/200/300"}}/>
      </TouchableOpacity> */}

      {/* <TouchableHighlight onPress={()=>console.log('image tapped')}>
        <Image fadeDuration={1000} blurRadius={10} source={{width: 200, height: 300, uri: "https://picsum.photos/200/300"}}/>

      </TouchableHighlight> */}
      <Button color="green" title="Click Me" 
        onPress={()=>Alert.alert('My title', 'my message', [
          {text: 'Yes', onPress: ()=>console.log('yes')},
          {text:'No', onPress: ()=>console.log('no')}
        ])}/>
        {/* Alert.prompt does not work on android */}
      {/* <Button title="Prompt"
        onPress={()=>Alert.prompt('My title', 'My message', (text)=>console.log(text))}/>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
  },
});
