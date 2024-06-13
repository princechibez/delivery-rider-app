import { SafeAreaView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ShipmentCard from '@/components/shipmentCard'
import { router } from 'expo-router'
import { Text } from 'react-native-paper'
import { useState } from 'react'
import { deliveryDetails as details } from '@/models/deliveryDetails'
import DeliveryDetails from '@/components/deliveryDetails'
import DeliveryStatus from '@/components/deliveryStatus'

const ShipmentInfo = () => {
    const [deliveryDetails, setDeliveryDetails] = useState({ ...details })
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Delivery details */}
                <DeliveryDetails details={deliveryDetails} />

                {/* Delivery status */}
                <Text style={{ marginVertical: 24, textAlign: 'center' }}>Delivery Status</Text>

                <DeliveryStatus />

                <View style={styles.deliveryFeeContainer}>
                    <View style={{
                        flex: 0.8,
                        paddingVertical: 8,
                        paddingHorizontal: 18,
                        borderRightWidth: 1,
                        borderStyle: 'dotted',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View>
                            <Text variant='bodySmall'>Delivery fee:</Text>
                            <Text variant='bodySmall'>Tip:</Text>
                        </View>
                        <View>
                            <Text variant='titleSmall'>₦7,600.00</Text>
                            <Text variant='titleSmall'>₦0.00</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 0.4,
                        paddingVertical: 8,
                        paddingHorizontal: 18,
                        alignItems: 'flex-end',
                        justifyContent: 'center'
                    }}>
                        <Text variant='titleMedium' style={{ fontWeight: 'bold' }}>₦9,500.00</Text>
                        <Text style={{ fontSize: 12, color: "#00DD80" }}>
                            Received
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingHorizontal: 14,
    },
    deliveryFeeContainer: {
        height: 80,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 30,
        marginBottom: 12,
        flexDirection: 'row',
    }
})

export default ShipmentInfo