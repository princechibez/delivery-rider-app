import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { DeliveryDetailsProps } from '@/models/deliveryDetails'

const DeliveryDetails = ({ details }: { details: DeliveryDetailsProps }) => {
    return (
        <View style={styles.deliveryDetails}>
            <View style={styles.detailContainer}>
                <View style={styles.detailContent}>
                    <Text variant='bodySmall'>Tracking ID</Text>
                    <Text style={{}} numberOfLines={1}>{details.trackingID}</Text>
                </View>

                <View style={styles.detailContent}>
                    <Text variant='bodySmall'>Receiver's Name</Text>
                    <Text numberOfLines={1}>{details.ReceiverName}</Text>
                </View>
            </View>

            <View style={styles.detailContainer}>
                <View style={styles.detailContent}>
                    <Text variant='bodySmall'>Pick-up Address</Text>
                    <Text style={{}} numberOfLines={1}>{details.PickUpAddress}</Text>
                </View>

                <View style={styles.detailContent}>
                    <Text variant='bodySmall'>Delivery Address</Text>
                    <Text numberOfLines={1}>{details.deliveryAddress}</Text>
                </View>
            </View>

            <View style={styles.detailContainer}>
                <View style={styles.detailContent}>
                    <Text variant='bodySmall'>Status</Text>
                    <Text style={{}} numberOfLines={1}>{details.status}</Text>
                </View>

                <View style={styles.detailContent}>
                    <Text variant='bodySmall'>Weight</Text>
                    <Text numberOfLines={1}>{details.weight}</Text>
                </View>
            </View>
        </View>
    )
}

export default DeliveryDetails

const styles = StyleSheet.create({
    deliveryDetails: {
        height: 200,
        width: "100%",
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 24,
        marginTop: 18,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    detailContainer: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    detailContent: {
        width: '49%'
    }
})