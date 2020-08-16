import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../utils/styles';
import Routing from '../components/Routing';
const TrackCreateScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TrackCreateScreen</Text>
            <Routing/>
        </View>
    )
}

export default TrackCreateScreen
