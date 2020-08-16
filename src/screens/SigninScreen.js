import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from '../utils/styles';
import Routing from '../components/Routing';

const SigninScreen = () => {
    return (
        <View>
            <Text style={{fontSize : 50}}>SigninScreen</Text>
            <Routing/>
        </View>
    )
}

export default SigninScreen
