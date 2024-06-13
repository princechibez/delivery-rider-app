import { SafeAreaView, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ShipmentCard from '@/components/shipmentCard'
import { router } from 'expo-router'

const ShipmentList = () => {
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingTop: 18 }}>
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(e => (
                            <ShipmentCard pressed={() => { router.push("(tabs)/earnings/shipmentInfo") }} />
                        ))
                    }
                </View>
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

export default ShipmentList