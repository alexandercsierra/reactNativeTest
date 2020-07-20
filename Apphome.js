// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text} from 'react-native';
import background from './assets/background.jpg'
import logo from './assets/logo-red.png'

export default function App() {

    const back = {uri: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}

    return (
        <View style={{
            //handles grow and shrink through positive and negative numbers respectively
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ImageBackground style={styles.bgImg} source={background}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo}/>
                    <Text>Sell What You Don't Need</Text>
                </View>
                <View style={styles.pinkBtn}></View>
                <View style={styles.blueBtn}></View>
            </ImageBackground>

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
    logoContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    pinkBtn: {
        height: 50,
        width: '100%',
        backgroundColor: '#ffa0a0',
        position: 'absolute',
        bottom: 50
    },
    blueBtn: {
        height: 50,
        width: '100%',
        backgroundColor: '#70c7c9',
        position: 'absolute',
        bottom: 0
    }
})
