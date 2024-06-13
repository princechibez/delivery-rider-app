import AuthProvider from "@/context/auth";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  configureFonts
} from 'react-native-paper'
import * as SystemUI from 'expo-system-ui'
import { GestureHandlerRootView } from "react-native-gesture-handler";

SystemUI.setBackgroundColorAsync("#fffff")

const RootLayout = () => {

  const fontConfig = {
    default: {
      regular: {
        fontFamily: 'Rubik',
        fontWeight: 'normal',
      },
      // medium: {
      //   fontFamily: 'sans-serif-medium',
      //   fontWeight: 'normal',
      // },
      // light: {
      //   fontFamily: 'sans-serif-light',
      //   fontWeight: 'normal',
      // },
      // thin: {
      //   fontFamily: 'sans-serif-thin',
      //   fontWeight: 'normal',
      // },
    },
  };

  const theme = {
    ...DefaultTheme,
    fonts: configureFonts({ config: { fontFamily: "Rubik" } }),
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: "#EF8712",
      secondary: "#F97B0E",
      text: "#646464",
    },
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        <AuthProvider>
          {/* <Stack screenOptions={{ headerShown: false }}> */}
          <Slot />
          {/* </Stack> */}
        </AuthProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

export default RootLayout


/**
 * Storage keys:--
 * onboarded: "true | false",
 * isAuthenticated: "true | false",
 * isAlreadyAUser: "true | false"
 */