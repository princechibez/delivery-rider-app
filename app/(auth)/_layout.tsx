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
      <Stack.Screen name="authSuccessful" options={{ headerShown: false }} />

      {/* personal info */}
      <Stack.Screen name="personalInfo" options={{ headerTitle: "Personal Info" }} />

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
    </Stack>
  )
}

export default AuthLayout