// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';

// AlphabetScreen.js Code
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const AlphabetScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextLetter = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
    };

    return (
        <View style={styles.alphabetContainer}>
            <Text style={styles.letter}>{alphabet[currentIndex]}</Text>
            <Button title="Следующая буква" onPress={nextLetter} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    alphabetContainer: {
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
});

// App.js Code
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Учимся читать</Text>
            <AlphabetScreen />
        </SafeAreaView>
    );
}