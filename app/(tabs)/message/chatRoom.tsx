import { SafeAreaView, StyleSheet, ScrollView, Dimensions, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import ChatRoomHeader from '@/components/chatRoomHeader'
import { Text } from 'react-native-paper'
import ChatMessageBox from '@/components/chatMessageBox'
import MessageCard from '@/components/messageCard'
import { IMessage, messages as messageList } from '@/models/messages'
import GestureRecognizer from 'react-native-swipe-gestures'
import moment from 'moment'
import NoMessage from '@/components/noMessage'

const windowHeight = Dimensions.get('window').height

const ChatRoom = () => {
  const { image, senderName, address } = useLocalSearchParams()
  const scrollRef = useRef<any>()

  const [messages, setMessages] = useState([])

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ y: windowHeight, animated: true })
    }, 1000);
  }, [messages])

  const addNewMessage = (text: string) => {
    const previousMessages = [...messages];
    const timestamp = moment(new Date()).format('hh:mm A')
    let newMessageList;
    const newMessage: IMessage = {
      myMessage: true,
      read: true,
      text,
      timestamp
    }
    const otherMessage: IMessage = {
      myMessage: false,
      read: false,
      text: `${senderName}'s message... Lolz. This will be update though when websocket has been integrated. Bye for now 👋👋... yea meanwhile you can swipe right to go back to other messages... See ya 😎`,
      timestamp
    }
    if (messages.length === 0) {
      newMessageList = [...previousMessages, newMessage, otherMessage, ...messageList]
    } else {
      newMessageList = [...previousMessages, newMessage]
    }
    setMessages(newMessageList)
  }

  const config = {
    velocityThreshold: 0.5,
    directionalOffsetThreshold: 80
  };

  return (
    <GestureRecognizer style={{ flex: 1 }} config={config} onSwipeRight={() => router.back()}>
      <SafeAreaView style={styles.body}>
        {/* Configure stack header */}
        <Stack.Screen options={{
          header: () => (
            <ChatRoomHeader image={image} name={senderName} address={address} />
          ),
        }} />


        {
          messages.length === 0 ?
            <NoMessage senderName={senderName.toString()} />
            :
            <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} style={styles.messagesContainer}>
              {
                messages.map((message, index) => (
                  <MessageCard message={message} key={index} />
                ))
              }
            </ScrollView>
        }
        <ChatMessageBox newMessage={addNewMessage} senderName={senderName.toString()} />
      </SafeAreaView>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  messagesContainer: {
    flex: 1,
    paddingTop: 12,
  }
})

export default ChatRoom