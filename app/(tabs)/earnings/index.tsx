import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import BarChartComponent from '@/components/barChart'
import EarningAnalytics from '@/components/earningAnalytics'
import { Text } from 'react-native-paper'
import RecentShipments from '@/components/recentShipments'

const Earnings = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Analytics section */}
        <EarningAnalytics />

        {/* Barchart section */}
        <BarChartComponent />

        {/* Recent shipments section */}
        <RecentShipments />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 12,
  }

})

export default Earnings