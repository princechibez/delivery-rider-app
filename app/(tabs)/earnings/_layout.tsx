import { Stack } from "expo-router"

const EarningsLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: 'transparent' },
                headerTitleStyle: {
                    fontSize: 14,
                    fontWeight: "medium",
                    fontFamily: "Rubik",
                    color: "#1E1E1E",
                },
            }}>
            {/* index */}
            <Stack.Screen name="index" options={{
                headerTitleAlign: 'left',
                headerTitle: "My Earnings",
                headerTitleStyle: {
                    fontSize: 20
                }
            }} />

            {/* shipment list */}
            <Stack.Screen name="shipmentsList" options={{
                headerTitle: "Recent Shipments"
            }} />

            {/* shipment info */}
            <Stack.Screen name="shipmentInfo" options={{
                headerTitle: "Parcel Delivery",
            }} />
        </Stack>
    )
}

export default EarningsLayout