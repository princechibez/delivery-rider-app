import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarChart } from 'react-native-gifted-charts'
import { router } from 'expo-router'
import { Button, Text } from 'react-native-paper'
import DropDown from "react-native-paper-dropdown";
import DropdownSelect from 'react-native-input-select'

const BarChartComponent = () => {
    const [incomceInterval, setIncomeInterval] = useState<string>("Weekly");
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [barData, setBarData] = useState([
        { value: 60, label: 'Mon' },
        { value: 25, label: 'Tue' },
        { value: 33, label: 'Wed' },
        { value: 13, label: 'Thu' },
        { value: 34, label: 'Fri' },
        { value: 52, label: 'Sat' },
        { value: 18, label: 'Sun' },
    ])

    useEffect(() => {
        setTimeout(() => {
            setBarData([
                { value: Math.floor(Math.random() * (100 - 3 + 1)) + 3, label: 'Mon' },
                { value: Math.floor(Math.random() * (100 - 3 + 1)) + 3, label: 'Tue' },
                { value: Math.floor(Math.random() * (100 - 3 + 1)) + 3, label: 'Wed' },
                { value: Math.floor(Math.random() * (100 - 3 + 1)) + 3, label: 'Thu' },
                { value: Math.floor(Math.random() * (100 - 3 + 1)) + 3, label: 'Fri' },
                { value: Math.floor(Math.random() * (100 - 3 + 1)) + 3, label: 'Sat' },
                { value: Math.floor(Math.random() * (100 - 3 + 1)) + 3, label: 'Sun' }
            ])
        }, 2000)
    }, [])

    const intervalList = [
        {
            label: "Daily",
            value: "daily",
        },
        {
            label: "Weekly",
            value: "weekly",
        },
        {
            label: "Monthly",
            value: "monthly",
        },
        {
            label: "Yearly",
            value: "yearly",
        },
    ]

    return (
        <View style={styles.container}>
            {/* <View style={styles.headSection}>
                <Text style={{ fontWeight: 700 }} variant='titleMedium'>Trend Income</Text>
                <DropDown
                    // label="Weekly"
                    placeholder='Weekly'
                    mode="outlined"
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={incomceInterval}
                    setValue={setIncomeInterval}
                    list={intervalList}
                />
            </View> */}
            <View style={styles.chartContainer}>
                <BarChart
                    isAnimated
                    animationDuration={500}
                    barWidth={22}
                    noOfSections={6}
                    barBorderRadius={8}
                    frontColor="#EF8712"
                    data={barData}
                    yAxisThickness={0}
                    xAxisThickness={1}
                    xAxisColor="#EF8712"
                    barBorderBottomLeftRadius={0}
                    barBorderBottomRightRadius={0}
                    // isThreeD
                    activeOpacity={0.7}
                />
            </View>
            {/* <Button mode='contained' onPress={() => router.push("earnings/shipmentsList")}>Go to recent shipments</Button> */}
        </View>
    )
}

export default BarChartComponent

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    chartContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 14,
        paddingVertical: 24,
        borderRadius: 30
    },
    headSection: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 8
    }
})