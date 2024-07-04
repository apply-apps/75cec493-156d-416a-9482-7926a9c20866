// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

// App.js
function App() {
    return (
        <SafeAreaView style={styles.appContainer}>
            <Text style={styles.title}>Вебинар</Text>
            <TabNavigator />
        </SafeAreaView>
    );
}

// TabNavigator.js
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Новости" component={NewsScreen} />
                <Tab.Screen name="Материалы" component={MaterialsScreen} />
                <Tab.Screen name="Обратная связь" component={ContactOrganizerScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// NewsScreen.js
const news = [
    { id: '1', title: 'Новость 1', content: 'Содержание новости 1' },
    { id: '2', title: 'Новость 2', content: 'Содержание новости 2' },
    { id: '3', title: 'Новость 3', content: 'Содержание новости 3' },
];

const NewsScreen = () => {
    const renderItem = ({ item }) => (
        <View style={styles.newsItem}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>
    );

    return (
        <FlatList
            data={news}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
        />
    );
};

// MaterialsScreen.js
const MaterialsScreen = () => {
    return (
        <View style={styles.materialsContainer}>
            <Text style={styles.materialsText}>Материалы вебинара будут доступны здесь.</Text>
        </View>
    );
};

// ContactOrganizerScreen.js
const ContactOrganizerScreen = () => {
    const [question, setQuestion] = useState('');

    const handleSend = () => {
        // Here would be the logic to send the question to the organizer
        console.log('Question sent:', question);
        setQuestion('');
    };

    return (
        <View style={styles.contactContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Введите ваш вопрос"
                value={question}
                onChangeText={setQuestion}
            />
            <Button title="Отправить" onPress={handleSend} />
        </View>
    );
};

const styles = StyleSheet.create({
    // App.js styles
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
    // NewsScreen.js styles
    list: {
        padding: 20,
    },
    newsItem: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    // MaterialsScreen.js styles
    materialsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    materialsText: {
        fontSize: 16,
        textAlign: 'center',
    },
    // ContactOrganizerScreen.js styles
    contactContainer: {
        flex: 1,
        padding: 20,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default App;