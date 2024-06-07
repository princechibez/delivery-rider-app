import { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router';
import GoogleIcon from "../../assets/images/googleIcon.png"
import FacebookIcon from '../../assets/images/facebookIcon.png'
import AppleIcon from '../../assets/images/appleIcon.png'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const SecuritySetting = () => {
    const theme = useTheme();
    const router = useRouter();

    const [option, setOption] = useState<"english" | "french">("english")

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

            <View style={styles.inputContainer}>
                {/* Form field welcome text */}
                <Text variant='titleLarge' style={{ fontWeight: 700 }}>Login & security</Text>

                <View style={styles.SecurityOptions}>

                    <TouchableOpacity activeOpacity={.5}
                        onPress={() => setOption("english")}
                        style={styles.cardStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={GoogleIcon} />
                            <Text>Google</Text>
                        </View>
                        <Button mode='text'>Unlink</Button>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}
                        onPress={() => setOption("french")}
                        style={{ ...styles.cardStyle, borderBottomWidth: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={FacebookIcon} />
                            <Text>Facebook</Text>
                        </View>
                        <Button mode='text'>Unlink</Button>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}
                        onPress={() => setOption("french")}
                        style={{ ...styles.cardStyle, borderBottomWidth: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={AppleIcon} />
                            <Text>Apple</Text>
                        </View>
                        <Button mode='text'>Unlink</Button>
                    </TouchableOpacity>

                </View>

                <Text style={{ color: '#646464', marginTop: 4, paddingRight: 8, lineHeight: 18 }}>
                    Linking a social account allows you to sign in to Motosprint without using a phone.
                    We will not use your social account for anything else without your permission
                </Text>
            </View>


            <Button mode='contained'
                onPress={() => router.back()}
                style={{
                    backgroundColor: theme.colors.primary,
                    width: '100%', padding: 4, alignSelf: 'flex-end'
                }}>
                Update
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        paddingVertical: 30,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        paddingVertical: 18,
        textAlign: 'center'
    },
    inputContainer: {
        flex: 1,
        gap: 8,
        width: windowWidth,
        paddingHorizontal: 12,
    },
    formField: {
        marginTop: 32,
        gap: 10
    },
    SecurityOptions: {
        width: '100%',
        marginVertical: 20,
        gap: 14
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: .5,
        borderBottomColor: '#C2C2C2'
    }
})

export default SecuritySetting