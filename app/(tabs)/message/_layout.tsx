import { Stack } from "expo-router"

const MessageLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerLargeTitleShadowVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: { color: "#1E1E1E", fontSize: 14 },
            }}>
            {/* index */}
            <Stack.Screen name="index" options={{
                headerTitleAlign: 'left',
                headerTitle: "My Messages",
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "medium",
                    // fontFamily: "Rubik"
                }
            }} />

            {/* chat room */}
            <Stack.Screen name="chatRoom" />
        </Stack>
    )
}

export default MessageLayout