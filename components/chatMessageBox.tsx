import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, TextInput } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'

const ChatMessageBox = ({ senderName }: { senderName: string }) => {
  return (
    <View style={styles.inputSection}>
      <Text variant='bodySmall'>{senderName} is typing...</Text>

      {/* <View style={styles.inputContainer}> */}
      <TextInput
        outlineStyle={styles.outlineStyles}
        placeholderTextColor="#4E4E4E"
        underlineColorAndroid="transparent"
        placeholder='Type a Message'
        contentStyle={styles.contentStyle}
        // onChangeText={(text) => searchMessages(text)}
        cursorColor='#4E4E4E'
        right={<TextInput.Icon icon="send" onPress={() => { }} />}
        // selectionColor={useTheme().colors.secondary}
        underlineColor="transparent"
        mode="outlined" />
      {/* <View style={styles.iconContainer}>
          <FontAwesome name="send" size={18} color="black" />
          <FontAwesome name="send" size={18} color="black" />
          <FontAwesome name="send" size={18} color="black" />
        </View>
      </View> */}
    </View>
  )
}

export default ChatMessageBox

const styles = StyleSheet.create({
  inputSection: {
    // height: 80,
    // width: '100%',
  },
  outlineStyles: {
    backgroundColor: '#F5F6FC',
    // width: 250,
    borderWidth: 0,
  },
  contentStyle: {
    // width: 250,
    // maxWidth: 250,
  },
  inputContainer: {
    borderWidth: 0,
    backgroundColor: "#F5F6FC",
    borderRadius: 24,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }
})