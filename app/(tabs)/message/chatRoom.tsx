import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ChatRoom = () => {
  const { image, senderName } = useLocalSearchParams()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen options={{
        headerTitle: senderName.toString()
      }} />
      <Text>ChatRoom</Text>
    </View>
  )
}

export default ChatRoom