import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-paper'
import { conversations } from '@/models/conversations'
import ConversationCard from '@/components/conversationCard'

const Messages = () => {
  const router = useRouter()
  const inputRef = useRef<any>().current

  const [searchQuery, setSearchQuery] = useState("")
  const [messages, setMessages] = useState(conversations)
  const [filteredMessages, setFilteredMessages] = useState([...conversations, ...conversations, ...conversations])

  const goToChatRoom = (conversation) => {
    setSearchQuery("")
    setFilteredMessages([...conversations, ...conversations, ...conversations])
    router.push({ pathname: "message/chatRoom", params: conversation })
  }

  const searchMessages = (query) => {
    setSearchQuery(query)
    if (!messages) return;
    // Include all elements which includes the search query
    const updatedList = messages.filter((message) => {
      const name = message.senderName;
      return name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    // Trigger render with updated values
    setFilteredMessages(updatedList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={searchQuery}
        ref={inputRef}
        outlineStyle={styles.outlineStyles}
        placeholderTextColor="#4E4E4E"
        underlineColorAndroid="transparent"
        placeholder='Search Message'
        contentStyle={styles.contentStyle}
        onChangeText={(text) => searchMessages(text)}
        cursorColor='#4E4E4E'
        left={<TextInput.Icon icon="search-web" />}
        // right={<TextInput.Icon icon="send" onPress={() => inputRef?.blur()} />}
        // selectionColor={useTheme().colors.secondary}
        underlineColor="transparent"
        mode="outlined" />

      {/* Chat list scrollview section */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.chatListContainer}>
        {filteredMessages.map((conversation, index) => (
          <ConversationCard
            key={index}
            conversation={conversation}
            goToChatRoom={() => goToChatRoom(conversation)}
            index={index}
            listCount={filteredMessages.length} />
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
  },
  outlineStyles: {
    borderWidth: 0,
    backgroundColor: "#F0F4F8",
    borderRadius: 24,
  },
  contentStyle: {
    color: "#4E4E4E",
    fontSize: 16
  },
  chatListContainer: {
    flex: 1,
  },

})

export default Messages