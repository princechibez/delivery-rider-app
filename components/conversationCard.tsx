import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Badge, Text } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { IConversationProps } from '@/models/conversations'

interface ICard {
    index: number,
    conversation: IConversationProps;
    listCount: number;
    goToChatRoom: () => void
}

const ConversationCard = ({ index, conversation, listCount, goToChatRoom }: ICard) => {
    return (
        <TouchableOpacity
            onPress={goToChatRoom}
            style={{ ...styles.chatContainer, marginTop: (index === 0) ? 18 : 0 }}
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
                    <Text
                        numberOfLines={1}
                        style={{ width: "100%", fontSize: 16 }}>
                        {conversation.senderName}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{ width: "100%" }}>
                        {conversation.lastMessage}
                    </Text>
                </View>
            </View>

            {/* message timestamp and unread count badge */}
            <View style={styles.timestamp}>
                {conversation.unread && <Badge style={{ backgroundColor: '#000' }}>{conversation.unread}</Badge>}
                <Text style={{ alignSelf: 'flex-end' }} variant='labelSmall'>{conversation.timestamp}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ConversationCard

const styles = StyleSheet.create({
    chatContainer: {
        height: 60,
        width: '100%',
        marginBottom: 14,
        // paddingHorizontal: 4,
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
        height: 50,
        width: 50,
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