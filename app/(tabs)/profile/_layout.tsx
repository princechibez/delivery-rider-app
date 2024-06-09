import { Stack } from "expo-router"

const ProfileLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerLargeTitleShadowVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: { color: "#1E1E1E", fontSize: 14 },
            }}>
            {/* index */}
            <Stack.Screen name="index" options={{ headerShown: false }} />

            {/* personal info */}
            <Stack.Screen name="personalInfo" options={{ headerTitle: "Personal Info" }} />

            {/* Vehicle information */}
            <Stack.Screen name="updateVehicleDetails" options={{ headerTitle: "Update Vehicle" }} />

            {/* Vehicle details a.k.a Vehicle registration number */}
            <Stack.Screen name="updateVehicleInfo" options={{ headerTitle: "Update Information" }} />

            {/* language selection */}
            <Stack.Screen name="language" options={{ headerTitle: "Language" }} />

            {/* update name screen */}
            <Stack.Screen name="updateName" options={{ headerTitle: "Your Name" }} />

            {/* update phone number */}
            <Stack.Screen name="updatePhone" options={{ headerTitle: "Phone Number" }} />

            {/* update email */}
            <Stack.Screen name="updateEmail" options={{ headerTitle: "Email Address" }} />

            {/* security settings */}
            <Stack.Screen name="securitySettings" options={{ headerTitle: "Security Settings" }} />

            {/* success page */}
            <Stack.Screen name="successPage" options={{ headerShown: false }} />
        </Stack>
    )
}

export default ProfileLayout