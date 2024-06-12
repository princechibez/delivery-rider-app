import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { IconButton, Text } from "react-native-paper"
import { router } from "expo-router"

import Avatar from '../assets/images/avatar.jpg'

const ChatRoomHeader = ({ image, name, address }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flex: .1 }}>
                <Ionicons
                    onPress={router.back}
                    name="arrow-back" size={24}
                    color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.senderProfile}>
                <Image style={styles.profileImageWrap} source={image === "" ? Avatar : image} />

                {/* sender name and last message */}
                <View>
                    <Text variant='bodyMedium' numberOfLines={1} style={{ width: "80%" }}>{name}</Text>
                    <Text variant='bodySmall' numberOfLines={1} style={{ maxWidth: "90%" }}>
                        {address}
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.IconSection}>
                <TouchableOpacity><FontAwesome name="phone" size={24} /></TouchableOpacity>
                <TouchableOpacity><MaterialCommunityIcons name="dots-vertical" size={24} color="black" /></TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90,
        paddingTop: 24,
        paddingHorizontal: 8,
        gap: 4,
        // backgroundColor: "#fff"
    },
    senderProfile: {
        flex: .7,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    profileImageWrap: {
        height: 45,
        width: 45,
        borderRadius: 50
    },
    IconSection: {
        flex: .2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '100%',
        alignItems: 'center'
    }
})

export default ChatRoomHeader