import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Badge, Button, Text, TextInput } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import Avatar from '../../../assets/images/avatar.jpg'
import { conversations } from '@/models/conversations'

const Messages = () => {
  const router = useRouter()

  const goToChatRoom = (conversation) => {
    router.push({ pathname: "message/chatRoom", params: conversation })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        outlineStyle={styles.outlineStyles}
        placeholderTextColor="#4E4E4E"
        underlineColorAndroid="transparent"
        placeholder='Search Message'
        contentStyle={styles.contentStyle}
        cursorColor='#4E4E4E'
        left={<TextInput.Icon icon="search-web" />}
        // selectionColor={useTheme().colors.secondary}
        underlineColor="transparent"
        mode="outlined" />


      {/* Chat list scrollview section */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.chatListContainer}>
        {conversations.map((conversation, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goToChatRoom(conversation)}
            style={{ ...styles.chatContainer, marginBottom: (index === conversations.length - 1) ? 32 : 14 }}
            activeOpacity={0.5}>
            {/* sender profile image, name and last text message */}
            <View style={styles.senderProfile}>
              <LinearGradient
                colors={['#EC5873', '#260F82']}
                dither
                end={{ x: 0.4, y: 0.8 }}
                style={styles.profileImageWrap}>
                <Image style={styles.profileImageStyle} source={conversation.image} />
              </LinearGradient>
              {/* sender name and last message */}
              <View style={{ flex: 1 }}>
                <Text variant='titleMedium' numberOfLines={1} style={{ width: "100%" }}>{conversation.senderName}</Text>
                <Text variant='titleSmall' numberOfLines={1} style={{ width: "100%" }}>{conversation.lastMessage}</Text>
              </View>
            </View>
            {/* message timestamp and unread count badge */}
            <View style={styles.timestamp}>
              {conversation.unread && <Badge style={{ backgroundColor: '#000' }}>{conversation.unread}</Badge>}
              <Text style={{alignSelf: 'flex-end'}} variant='labelSmall'>{conversation.timestamp}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
    // paddingTop: 14
  },
  outlineStyles: {
    borderWidth: 0,
    backgroundColor: "#F0F4F8",
    borderRadius: 24
  },
  contentStyle: {
    color: "#4E4E4E"
  },
  chatListContainer: {
    flex: 1,
    paddingTop: 18,
  },
  chatContainer: {
    height: 60,
    width: '100%',
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  senderProfile: {
    height: '100%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileImageWrap: {
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  profileImageStyle: {
    height: '92%',
    width: '92%',
    borderRadius: 50,
    objectFit: 'cover'
  },
  timestamp: {
    height: "100%",
    width: "20%",
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 4,
  }
})

export default Messages