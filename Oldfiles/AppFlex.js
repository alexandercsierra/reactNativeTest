// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';



export default function App() {



    return (
        <View style={{
            backgroundColor: '#fff',
            //handles grow and shrink through positive and negative numbers respectively
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: 'dodgerblue',
                flexBasis: 100, //can map to width or height depending on which is primary axis
                // flexGrow: 1,
                width: 100,
                height: 100

            }}/>
            <View style={{
                backgroundColor: 'gold',
                width: 100,
                height: 100,
                top: -20

            }}/>
            <View style={{
                backgroundColor: 'tomato',
                width: 100,
                height: 100

            }}/>

        </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
//   },
// });
