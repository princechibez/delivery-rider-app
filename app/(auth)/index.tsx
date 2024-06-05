import { PasswordInput, PhoneNumberInput } from '@/components/input';
import { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import GoogleIcon from '../../assets/images/googleIcon.png'
import AppleIcon from '../../assets/images/appleIcon.png'
import { useRouter } from 'expo-router';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Register = () => {
    const theme = useTheme();
    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState("")


    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.inputContainer}>
                    {/* header text */}
                    <Text style={styles.headerText} variant='titleMedium'>Register</Text>
                    {/* Form field welcome text */}
                    <Text variant='titleLarge' style={{ fontWeight: 700 }}>Welcome Here</Text>
                    <Text style={{ color: '#646464', marginTop: 4 }}>
                        Sign up with one of the following.
                    </Text>

                    {/* User input field */}
                    <View style={styles.formField}>
                        <PhoneNumberInput
                            labelText='Enter your mobile number*'
                            setPhoneValue={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="Mobile Number"
                            setCountry={setCountry} />

                        <Button mode='contained'
                            onPress={() => { router.push("(auth)/verification") }}
                            style={{
                                backgroundColor: theme.colors.primary,
                                width: '100%', padding: 4, marginTop: 4
                            }}>
                            Continue
                        </Button>

                        {/* Demacator */}
                        <View style={styles.demacatorView}>
                            <Text>Or</Text>
                        </View>

                        {/* Auth2 options section */}
                        <View style={styles.Auth2Section}>
                            <Button mode='outlined'
                                onPress={() => { }}
                                style={{
                                    width: '100%', padding: 4, borderRadius: 24, borderWidth: 1, borderColor: "#C9C9C9",
                                }}>
                                <Image source={GoogleIcon} style={{ paddingRight: 24 }} />
                                <Text>  Continue with Google</Text>
                            </Button>
                            <Button mode='outlined'
                                onPress={() => { }}
                                style={{
                                    width: '100%', padding: 4, borderRadius: 24, borderWidth: 1, borderColor: "#C9C9C9",
                                }}>
                                <Image source={AppleIcon} />
                                <Text>  Continue with Apple</Text>
                            </Button>

                            <TouchableOpacity activeOpacity={.5} style={{ marginVertical: 14, alignSelf: 'center' }}>
                                <Text style={{ color: "#535353" }}>Find my existing account</Text>
                            </TouchableOpacity>

                            <Button mode='outlined'
                                onPress={() => { router.push("(auth)/login") }}
                                style={{
                                    width: '100%', padding: 4, borderRadius: 24, borderWidth: 1,
                                    borderColor: theme.colors.primary, marginBottom: 8
                                }}>
                                Login my existing account
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        // </OnBoardImage>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        paddingVertical: 18,
        textAlign: 'center'
    },
    inputContainer: {
        width: windowWidth,
        paddingHorizontal: 12,
    },
    formField: {
        marginVertical: 22,
        gap: 18
    },
    inputStyle: {
        borderRadius: 18
    },
    demacatorView: {
        marginVertical: 8,
        alignSelf: 'center'
    },
    Auth2Section: {
        flex: 1,
        gap: 10
    }
})

export default Register