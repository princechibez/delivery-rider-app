import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import ChatRoomHeader from '@/components/chatRoomHeader'
import { Text } from 'react-native-paper'
import ChatMessageBox from '@/components/chatMessageBox'
import MessageCard from '@/components/messageCard'
import { messages } from '@/models/messages'

const ChatRoom = () => {
  const { image, senderName, address } = useLocalSearchParams()
  return (
    <SafeAreaView style={styles.body}>
      <Stack.Screen options={{
        header: () => (
          <ChatRoomHeader image={image} name={senderName} address={address} />
        ),
      }} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.messagesContainer}>
        {
          messages.map((message, index) => (
            <MessageCard message={message} key={index} />
          ))
        }
      </ScrollView>
      <ChatMessageBox senderName={senderName.toString()} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
  messagesContainer: {
    flex: 1,
    paddingTop: 12,
  }
})

export default ChatRoom