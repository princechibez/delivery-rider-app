import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarChart } from 'react-native-gifted-charts'

const Earnings = () => {
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


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <BarChart
          isAnimated
          animationDuration={500}
          barWidth={22}
          noOfSections={6}
          barBorderRadius={8}
          frontColor="#EF8712"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
    </View>
  )
}

export default Earnings