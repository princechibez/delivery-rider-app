import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'

import Avatar from '../../../assets/images/avatar.jpg'
import AddPicture from '../../../assets/images/addPicture.png'
import { useState } from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'


const windowWidth = Dimensions.get('window').width

const PersonalInfo = () => {
    const router = useRouter()

    const [image, setImage] = useState<null | string>(null)

    const uploadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View style={styles.container}>
            {/* Hero section */}
            <View style={styles.profileHero}>
                {image ?
                    (<ImageBackground
                        source={{ uri: image }}
                        imageStyle={{ borderRadius: 50 }}
                        style={styles.ImageStyle}>
                        <TouchableOpacity activeOpacity={.5} onPress={uploadImage}>
                            <Image source={AddPicture} style={styles.AddIconStyle} />
                        </TouchableOpacity>
                    </ImageBackground>)
                    :
                    (<ImageBackground
                        source={Avatar}
                        imageStyle={{ borderRadius: 50 }}
                        style={styles.ImageStyle}>
                        <TouchableOpacity activeOpacity={.5} onPress={uploadImage}>
                            <Image source={AddPicture} style={styles.AddIconStyle} />
                        </TouchableOpacity>
                    </ImageBackground>)
                }
                <Text style={{ ...styles.profileHeroText, fontWeight: 500 }} variant='titleSmall'>
                    Add a profile picture so riders can recognise you
                </Text>
            </View>

            <View style={styles.credentialSection}>
                {/* name */}
                <View style={styles.cardStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome5 name="user" size={18} color="black" />
                        <Text variant='labelLarge'>Daniel Ndubisi</Text>
                    </View>
                    <Button onPress={() => { router.push("profile/updateName") }} mode='text'>Edit</Button>
                </View>
                {/* phone number */}
                <View style={styles.cardStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Ionicons name="call-outline" size={18} color="black" />
                        <Text variant='labelLarge'>+2347067421332</Text>
                    </View>
                    <Button onPress={() => { router.push("profile/updatePhone") }} mode='text'>Edit</Button>
                </View>
                {/* email address */}
                <View style={styles.cardStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Ionicons name="mail-outline" size={18} color="black" />
                        <Text variant='labelLarge'>daniel.ndubisi@gmail.com</Text>
                    </View>
                    <Button onPress={() => { router.push("profile/updateEmail") }} mode='text'>Edit</Button>
                </View>
                {/* language */}
                {/* <View style={{ ...styles.cardStyle, borderBottomWidth: 0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome5 name="flag" size={18} color="black" />
                        <Text variant='labelLarge'>Language</Text>
                    </View>
                    <Button onPress={() => { router.push("(auth)/language") }} mode='text'>Edit</Button>
                </View> */}
            </View>
        </View>
    )
}

export default PersonalInfo

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9FF',
        flex: 1,
        width: windowWidth,
        paddingHorizontal: 14,
        alignItems: 'center'
    },
    profileHero: {
        height: 200,
        width: "100%",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginVertical: 24,
        borderRadius: 24,
        borderWidth: 0,
        paddingHorizontal: 48
    },
    ImageStyle: {
        height: 80,
        width: 80,
        position: 'relative',
        overflow: 'hidden',
        objectFit: 'contain'
    },
    AddIconStyle: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    profileHeroText: {
        textAlign: 'center',
        color: '#1E1E1E'
    },
    credentialSection: {
        width: '100%',
        gap: 14
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#C2C2C2'
    }
})