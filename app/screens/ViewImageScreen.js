// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text} from 'react-native';
import colors from '../config/colors'
import chair from '../assets/chair.jpg'

export default function ViewImageScreen() {


    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',            
            backgroundColor: 'black'
        }}>
            <View style={styles.btnContainer}>
                <View style={styles.pinkBtn}></View>
                <View style={styles.blueBtn}></View>
            </View>
            <Image resizeMode="contain" style={styles.img} source={chair}/>
            <View style={styles.btnContainer}></View>

        </View>
  );
}

const styles = StyleSheet.create({
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
        backgroundColor: colors.primary,
    },
    blueBtn: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary
    }
})
