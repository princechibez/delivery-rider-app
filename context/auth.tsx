import { useRouter, useSegments } from "expo-router";
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Splashscreen from 'expo-splash-screen'

Splashscreen.preventAutoHideAsync();

export const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const rootSegment = useSegments()[0]
  const router = useRouter()

  const [appIsReady, setAppIsReady] = useState(false)
  const [isBoarded, setIsBoarded] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(null)
  const [user, setUser] = useState<string | null>(null)

  // AsyncStorage.clear()

  // Load and prepare app and then set app is ready
  useEffect(() => {
    async function prepare() {
      try {
        // get onboard data
        const boarded = await AsyncStorage.getItem("onboarded")
        const authenticated = await AsyncStorage.getItem("isAuthenticated")
        setIsBoarded(boarded)
        setIsAuthenticated(authenticated)

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

      if (appIsReady) {
        await Splashscreen.hideAsync()
      }
    }
    checkIfAppIsReady()

    if (!isBoarded && rootSegment !== "/") {
      router.replace("/")
    }
    else if (!isAuthenticated && isBoarded && rootSegment !== "(auth)") {
      router.replace("/(auth)/login")
    }
    else if (!isAuthenticated && rootSegment !== "(auth)") {
      router.replace("/(auth)")
    }
    else if (isAuthenticated && rootSegment !== "(tabs)") {
      router.replace("/(tabs)")
    }
  }, [appIsReady, isBoarded, isAuthenticated, rootSegment])


  // user boarding handler... used for saving boarding data
  const userOnboardHandler = async (conditionChecked: boolean) => {
    try {
      await AsyncStorage.setItem("onboarded", "true")
      setIsBoarded("true")
      router.push("(auth)")
    } catch (err) {
      // error saving data...
    }
  }

  // user authentication handler... used for saving auth data
  const userAuthenticationHandler = async () => {
    try {
      await AsyncStorage.setItem("isAuthenticated", "true")
      setIsAuthenticated("true")
      router.push("(tabs)")
    } catch (err) {
      // error saving data...
    }
  }

  return (
    <AuthContext.Provider value={{
      user: user,
      setAuthenticationStatus: userAuthenticationHandler,
      setUserBoarding: userOnboardHandler
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider