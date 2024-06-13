import { Stack } from "expo-router"

const EarningsLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 14,
                    fontWeight: "medium",
                    fontFamily: "Rubik",
                    color: "#1E1E1E",
                },
            }}>
            {/* index */}
            <Stack.Screen name="index" options={{
                headerShadowVisible: false
            }} />

            {/* shipment list */}
            <Stack.Screen name="shipmentsList" options={{
                headerTitle: "Recent Shipments",
            }} />

            {/* shipment info */}
            <Stack.Screen name="shipmentInfo" />
        </Stack>
    )
}

export default EarningsLayout