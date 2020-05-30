import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();
import Texto from '../Pages/Texto';

export default function DashboardRoutes() {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Texto} />
                <Tab.Screen name="Settings" component={Texto} />
            </Tab.Navigator>
        </>
    );
}