import AuthProvider from "@/context/auth";
import { Slot, Stack } from "expo-router";
import { StatusBar } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider
} from 'react-native-paper'

const RootLayout = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#EF8712",
      secondary: "#F97B0E"
    },
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Slot />
        </Stack>
      </AuthProvider>
    </PaperProvider>
  );
}

export default RootLayout


/**
 * Storage keys:--
 * onboarded: "true",
 * isAuthenticated: "true",
 */