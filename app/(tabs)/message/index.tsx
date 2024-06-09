import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { Stack, Tabs, useRouter } from 'expo-router'

const Messages = () => {
  const router = useRouter()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages</Text>
      <Button mode='contained' onPress={() => router.push("(tabs)/message/chatRoom")}>Go to chat room</Button>
    </View>
  )
}

export default Messages