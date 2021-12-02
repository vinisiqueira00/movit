import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Temp from './pages/Temp';

const Routes = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={} />
            <Tab.Screen name="Temp" component={Temp} />
        </Tab.Navigator>
    );
}

export default Routes;
