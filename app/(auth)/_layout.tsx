import { Stack } from "expo-router"

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="verification"
        options={{
          headerTitle: "Email Confirmation",
          headerTitleAlign: 'center',
          headerTitleStyle: { color: "#1E1E1E", fontSize: 14 },
        }} />
      <Stack.Screen name="createPassword"
        options={{
          headerTitle: "Create Password",
          headerTitleAlign: 'center',
          headerTitleStyle: { color: "#1E1E1E", fontSize: 14 }
        }} />
      <Stack.Screen name="authSuccessful" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AuthLayout