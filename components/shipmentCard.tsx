import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

const ShipmentCard = ({ pressed }: { pressed: () => void }) => {
    return (
        <TouchableOpacity onPress={pressed} activeOpacity={0.5} style={styles.shipmentCard}>
            <View style={{ flex: 0.7 }}>
                <Text variant='bodyLarge' numberOfLines={1}>Parcel Delivery</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <Text variant='bodyMedium' style={{ maxWidth: "40%" }} numberOfLines={1}>Lekki </Text>
                    <Ionicons name='arrow-forward' size={18} />
                    <Text variant='bodyMedium' style={{ maxWidth: "40%" }} numberOfLines={1}> Gbagada</Text>
                </View>
            </View>
            <View style={{ alignItems: 'flex-end', flex: 0.3 }}>
                <Text variant='titleMedium'>₦7,600.00</Text>
                <Text style={{ fontSize: 12, color: "#00DD80" }} variant='bodyMedium'>
                    Received
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ShipmentCard

const styles = StyleSheet.create({
    shipmentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 24,
        height: 90,
        width: "100%",
        padding: 14,
        marginBottom: 8
    }
})