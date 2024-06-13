import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'
import TotalDeliverImage from '../assets/images/total-delivery.png'
import OnTimeImage from '../assets/images/ontime.png'

const EarningAnalytics = () => {
    return (
        <View style={styles.analytics}>
            <View style={styles.totalIncome}>
                <Text variant='titleMedium'>Total Income</Text>
                <View style={{ gap: 2 }}>
                    <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>₦460,600</Text>
                    <Text style={{ fontSize: 11 }} numberOfLines={1} variant='bodyMedium'>
                        <Ionicons name='arrow-up' size={14} color="#00DD80" />
                        <Text style={{ color: "#00DD80" }}>0.5%</Text> than last month
                    </Text>
                </View>
            </View>

            <View style={styles.deliveryAnalyticsContainer}>
                <View style={styles.deliveryAnalytics}>
                    <Image source={TotalDeliverImage} />
                    <View style={{ gap: 4 }}>
                        <Text style={{ color: '#A5A5A5', fontSize: 12 }}>Total Delivery</Text>
                        <Text variant='titleLarge' style={{ fontWeight: 'bold' }}>1629</Text>
                    </View>
                </View>
                <View style={styles.deliveryAnalytics}>
                    <Image source={OnTimeImage} />
                    <View style={{ gap: 4 }}>
                        <Text style={{ color: '#A5A5A5', fontSize: 12 }}>On time Delivery</Text>
                        <Text variant='titleLarge' style={{ fontWeight: 'bold' }}>86%</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default EarningAnalytics

const styles = StyleSheet.create({
    analytics: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingTop: 18,
        height: 160,
    },
    totalIncome: {
        height: "100%",
        width: '49%',
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 14,
        justifyContent: 'space-between'
    },
    deliveryAnalyticsContainer: {
        height: "100%",
        width: "49%",
        justifyContent: 'space-between',
    },
    deliveryAnalytics: {
        height: "48%",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 24,
        padding: 8,
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})