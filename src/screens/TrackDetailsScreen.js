import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../utils/styles';
import Routing from '../components/Routing';
const TrackDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TrackDetailsScreen</Text>
            <Routing/>
        </View>
    )
}

export default TrackDetailsScreen
