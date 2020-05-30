import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

export default function Texto({ navigation }) {
    function navigateToUsers() {
        navigation.navigate('Users');
    }

    return (
        <View>
            <Button title="navigate to Useres" onPress={navigateToUsers}  />
        </View>
        );
}
