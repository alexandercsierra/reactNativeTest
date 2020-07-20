// import { StatusBar } from 'expo-status-bar';
//got to app.json and set orientation to default to support both portrait and landscape
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, SafeAreaView, Platform} from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'


export default function App() {

    const handlePress = ()=>console.log('pressed')
    const {landscape} = useDeviceOrientation();

    return (
        // can pass in an array of objects to style as well
        <SafeAreaView style={styles.container}>
        <View style={{
            backgroundColor: 'dodgerblue',
            width: '100%',
            height: landscape ? '100%' : '30%'
        }}></View>
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
