// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Speech from 'expo-speech';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const words = {
    A: 'Apple',
    B: 'Ball',
    C: 'Cat',
    D: 'Dog',
    E: 'Elephant',
    F: 'Fish',
    G: 'Goat',
    H: 'Hat',
    I: 'Ice cream',
    J: 'Juice',
    K: 'Kite',
    L: 'Lion',
    M: 'Monkey',
    N: 'Nose',
    O: 'Orange',
    P: 'Pig',
    Q: 'Queen',
    R: 'Rabbit',
    S: 'Sun',
    T: 'Tiger',
    U: 'Umbrella',
    V: 'Van',
    W: 'Wolf',
    X: 'Xylophone',
    Y: 'Yacht',
    Z: 'Zebra',
};

const AlphabetScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextLetter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
    };

    const showWord = () => {
        Alert.alert("Слово на букву " + alphabet[currentIndex], words[alphabet[currentIndex]]);
        Speech.speak(words[alphabet[currentIndex]]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.letter}>{alphabet[currentIndex]}</Text>
            <Button title="Следующая буква" onPress={nextLetter} />
            <View style={styles.space} />
            <Button title="Показать слово" onPress={showWord} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    letter: {
        fontSize: 100,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    space: {
        marginVertical: 10,
    },
    appContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
});

export default function App() {
    return (
        <SafeAreaView style={styles.appContainer}>
            <Text style={styles.title}>Учимся читать</Text>
            <AlphabetScreen />
        </SafeAreaView>
    );
}