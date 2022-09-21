import { View, Text } from 'react-native'
import React from 'react'

export default function Wow({ connector }) {
    console.log(connector.accounts[0]);
    return (
        <View>
            <Text>Wow</Text>
        </View>
    )
}