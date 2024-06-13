import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'

const DeliveryStatus = () => {
    return (
        <View style={styles.statusContainer}>
            <View>
                <Text variant='bodyMedium'>Tracking Number Created</Text>
                <Text variant='bodySmall' numberOfLines={1}>34a Sultan Bello Street, Agric, Ikorodu, Lagos</Text>
            </View>
            <View>
                <Text variant='bodyMedium'>Package Picked and out for Delivery</Text>
                <Text variant='bodySmall' numberOfLines={1}>CBC Towers, 10 Olubunmi Owa St, Lekki, Phase 1, Lagos</Text>
            </View>
            <View>
                <Text variant='bodyMedium'>In Transit</Text>
                <Text variant='bodySmall' numberOfLines={1}>CBC Towers, 10 Olubunmi Owa St, Lekki, Phase 1, Lagos</Text>
            </View>
            <View>
                <Text variant='bodyMedium'>Out for Delivery</Text>
                <Text variant='bodySmall' numberOfLines={1}>CBC Towers, 10 Olubunmi Owa St, Lekki, Phase 1, Lagos</Text>
            </View>
            <View>
                <Text>Delivered</Text>
            </View>
        </View>
    )
}

export default DeliveryStatus

const styles = StyleSheet.create({
    statusContainer: {
        height: 290,
        width: "100%",
        borderLeftWidth: 5,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        paddingLeft: 24,
        marginBottom: 24,
        justifyContent: 'space-between',
        // paddingRight: 12,
        // backgroundColor: 'red'
    }
})