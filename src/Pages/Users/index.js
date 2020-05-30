import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { Container } from './styles';

export default function Users({navigation}) {

    function navigateToSettings(){
        navigation.navigate('Home', {
            screen: 'Settings'
        });
    }

    return (
        <View>
            <Text>Users</Text>
            <Button title="Navigate to Settings" onPress={navigateToSettings} />
        </View>
    );
}
