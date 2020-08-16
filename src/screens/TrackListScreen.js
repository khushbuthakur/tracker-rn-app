import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../utils/styles';
import Routing from '../components/Routing';
const TrackListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TrackListScreen</Text>
            <Routing/>
        </View>
    )
}

export default TrackListScreen
