import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../utils/styles';
import Routing from '../components/Routing';
const SignupScreen = () => {
    return (
        <View style={styles.container}>
            <Text>SignupScreen</Text>
            <Routing/>
        </View>
    )
}

export default SignupScreen
