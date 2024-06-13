import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { IMessage } from '@/models/messages'
import ReadReciept from '../assets/images/read-reciept.png'

interface IMessageCard {
    message: IMessage
}

const MessageCard = ({ message }: IMessageCard) => {
    return (
        message.myMessage ?
            (<View style={{marginBottom: 8}}>
                <View style={styles.myMessage}>
                    <Text style={styles.myMessageText}>{message.text}</Text>
                </View>
                <View style={{ flexDirection: 'row-reverse', gap: 8, alignItems: 'center' }}>
                    {message.read && <Image source={ReadReciept} />}
                    <Text style={{ ...styles.timestamp }}>{message.timestamp}</Text>
                </View>
            </View>)
            :
            (<View style={{marginBottom: 8}}>
                <View style={styles.container}>
                    <Text>{message.text}</Text>
                </View>
                <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>)
    )
}

export default MessageCard

const styles = StyleSheet.create({
    container: {
        maxWidth: "70%",
        marginBottom: 8,
        padding: 12,
        paddingBottom: 4,
        backgroundColor: "#F0F4F8",
        borderRadius: 14,
        borderBottomLeftRadius: 0,
        alignItems: 'flex-start',
        gap: 8
    },
    myMessage: {
        maxWidth: "70%",
        backgroundColor: "#EF8712",
        marginBottom: 8,
        padding: 12,
        paddingBottom: 4,
        gap: 8,
        borderRadius: 14,
        borderBottomRightRadius: 0,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    myMessageText: {
        color: "#fff"
    },
    timestamp: {
        color: "#787878",
        fontSize: 10
    }
})