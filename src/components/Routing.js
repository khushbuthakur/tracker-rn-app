import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Routing = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text>To Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text>To Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <Text>To Account</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TrackCreate')}>
                <Text>To TrackCreate</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TrackList')}>
                <Text>To TrackList</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TrackDetails')}>
                <Text>To TrackDetails</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Routing
