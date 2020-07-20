import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text} from 'react-native';
import colors from '../config/colors'
import background from '../assets/background.jpg'
import logo from '../assets/logo-red.png'

export default function WelcomeScreen() {

    return (
        <View style={{
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
        backgroundColor: colors.primary,
        position: 'absolute',
        bottom: 50
    },
    blueBtn: {
        height: 50,
        width: '100%',
        backgroundColor: colors.secondary,
        position: 'absolute',
        bottom: 0
    }
})
