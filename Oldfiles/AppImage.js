// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text} from 'react-native';
import background from './assets/background.jpg'
import logo from './assets/logo-red.png'
import chair from './assets/chair.jpg'

export default function App() {

    const back = {uri: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}

    return (
        <View style={{
            //handles grow and shrink through positive and negative numbers respectively
            flex: 1,
            justifyContent: 'center',            
            backgroundColor: colors.black
        }}>
            <View style={styles.btnContainer}>
                <View style={styles.pinkBtn}></View>
                <View style={styles.blueBtn}></View>
            </View>
            <Image style={styles.img} source={chair}/>
            <View style={styles.btnContainer}></View>

        </View>
  );
}

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    img: {
        height: '60%',
        width: '100%',
        flex: 5
    },
    btnContainer:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        height: '100%'
    },
    pinkBtn: {
        height: 50,
        width: 50,
        backgroundColor: '#ffa0a0',
    },
    blueBtn: {
        height: 50,
        width: 50,
        backgroundColor: '#70c7c9'
    }
})
