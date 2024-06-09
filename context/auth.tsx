import { useRouter, useSegments } from "expo-router";
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Splashscreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import Rubik from '../assets/fonts/Rubik-Regular.ttf'

Splashscreen.preventAutoHideAsync();

// AsyncStorage.clear()

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const rootSegment = useSegments()[0]
  const router = useRouter()

  const [fontsLoaded, fontError] = useFonts({
    'Rubik': Rubik,
  });

  const [appIsReady, setAppIsReady] = useState(false)
  const [isBoarded, setIsBoarded] = useState<string | null>(null)
  const [alreadyAUser, setAlreadyAUser] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(null)
  const [user, setUser] = useState<string | null>(null)

  // Load and prepare app and then set app is ready
  useEffect(() => {
    async function prepare() {
      try {
        // get onboard data
        const boarded = await AsyncStorage.getItem("onBoarded")
        const authenticated = await AsyncStorage.getItem("isAuthenticated")
        const isAlreadyAUser = await AsyncStorage.getItem("isAlreadyAUser")
        setIsBoarded(boarded)
        setIsAuthenticated(authenticated)
        setAlreadyAUser(isAlreadyAUser)

        // get authentication data
        // ...
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  useEffect(() => {
    // Hide the splashscreen when app has fully loaded...
    async function checkIfAppIsReady() {
      if (!appIsReady) return

      if (appIsReady && (fontsLoaded || fontError)) {
        await Splashscreen.hideAsync()
      }
    }
    checkIfAppIsReady()

    if (!isBoarded && rootSegment !== "/") {
      router.replace("/")
    }
    else if (!isAuthenticated && alreadyAUser && rootSegment !== "(auth)") {
      router.replace("/(auth)/login")
    }
    else if (!isAuthenticated && !alreadyAUser && rootSegment !== "(auth)") {
      router.replace("/(auth)")
    }
    else if (isAuthenticated && rootSegment !== "(tabs)") {
      router.replace("/(tabs)")
    }
  }, [appIsReady, isBoarded, isAuthenticated, alreadyAUser, fontsLoaded, fontError, rootSegment])


  // user boarding handler... used for saving boarding data
  const userOnboardHandler = async (conditionChecked: boolean) => {
    try {
      await AsyncStorage.setItem("onBoarded", "true")
      setIsBoarded("true")
      router.replace("(auth)")
    } catch (err) {
      // error saving data...
    }
  }

  // user authentication handler... used for saving auth data
  const registerHandler = async () => {
    try {
      await AsyncStorage.setItem("isAlreadyAUser", "true")
      await AsyncStorage.setItem("isAuthenticated", "true")
      setIsAuthenticated("true")
      setAlreadyAUser("true")
      // router.replace("(tabs)")
    } catch (err) {
      // error saving data...
    }
  }

  // user authentication handler... used for saving auth data
  const loginHandler = async () => {
    try {
      await AsyncStorage.setItem("isAuthenticated", "true")
      setIsAuthenticated("true")
      router.replace("(tabs)")
    } catch (err) {
      // error saving data...
    }
  }

  const logoutHandler = () => {
    AsyncStorage.removeItem("isAuthenticated")
    setIsAuthenticated(null)
    setUser(null)
    router.replace("(auth)/login")
  }

  return (
    <AuthContext.Provider value={{
      user: user,
      signin: loginHandler,
      signup: registerHandler,
      signout: logoutHandler,
      setUserBoarding: userOnboardHandler
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider