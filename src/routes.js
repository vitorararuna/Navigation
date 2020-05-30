import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Users from './Pages/Users';
import DashboardRoutes from './routes/dashboard.routes';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Users" screenOptions={{headerStyle: {backgroundColor: '#7159c1'}}}>
            <Stack.Screen name="Home" component={DashboardRoutes} options={{title: "Dashboard"}}/>
            <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
    );
}
