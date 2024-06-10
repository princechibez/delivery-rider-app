import { Stack } from "expo-router"

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: { color: "#1E1E1E", fontSize: 14 },
      }}>
      {/* Index screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Login Screen */}
      <Stack.Screen name="login" options={{ headerShown: false }} />

      {/* Verification */}
      <Stack.Screen name="verification" options={{ headerTitle: "Email Confirmation" }} />

      {/* create password */}
      <Stack.Screen name="createPassword" options={{ headerTitle: "Create Password" }} />

      {/* Primary authentication Success */}
      <Stack.Screen name="successPage" options={{ headerShown: false }} />

      {/* Rider profile setup */}
      <Stack.Screen name="profileSetup"
        options={{
          headerTitle: "Set up your account",
          headerBackVisible: false
        }} />

      {/* Vehicle details a.k.a Vehicle registration number */}
      <Stack.Screen name="vehicleDetails" options={{ headerTitle: "Vehicle Details" }} />

      {/* Vehicle information */}
      <Stack.Screen name="vehicleInfo" options={{ headerTitle: "Vehicle Information" }} />

    </Stack>
  )
}

export default AuthLayout