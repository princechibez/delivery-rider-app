import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import ShipmentCard from './shipmentCard'
import { router } from 'expo-router'

const RecentShipments = () => {
    return (
        <View>
            <View style={styles.headerStyle}>
                <Text style={{ fontWeight: 600 }} variant='titleMedium'>Recent Shipment</Text>
                <TouchableOpacity onPress={() => router.push("(tabs)/earnings/shipmentsList")}>
                    <Text variant='bodyMedium'>See More</Text>
                </TouchableOpacity>
            </View>
            {
                [1, 1, 1, 1, 1].map(e => (
                    <ShipmentCard pressed={() => router.push("(tabs)/earnings/shipmentInfo")} />
                ))
            }
        </View>
    )
}

export default RecentShipments

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        justifyContent: 'space-between'
    }
})