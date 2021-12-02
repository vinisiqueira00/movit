import React, { useState } from 'react';
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import { NavigationContainer } from '@react-navigation/native';

// import Home from './src/pages/Home';
import Routes from './src/Routes';

export default function App() {
    const [fontsloaded, setFontsLoaded] = useState(false);

    const getFonts = () => Font.loadAsync({
        RobotoThin: require('./assets/fonts/Roboto/Roboto-Thin.ttf'),
        RobotoLight: require('./assets/fonts/Roboto/Roboto-Light.ttf'),
        RobotoRegular: require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        RobotoMedium: require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
        RobotoBold: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
        RobotoBlack: require('./assets/fonts/Roboto/Roboto-Black.ttf'),
    });

    if (fontsloaded) {
        return (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        );
    }
    else {
        return (
            <Apploading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />
        );
    }
}


