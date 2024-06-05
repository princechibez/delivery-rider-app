import { Stack } from "expo-router"

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="authSuccessful" />
      <Stack.Screen name="verification" />
      <Stack.Screen name="createPassword" />
    </Stack>
  )
}

export default AuthLayout