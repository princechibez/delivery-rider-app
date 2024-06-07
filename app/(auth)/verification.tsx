import { useState } from 'react';
import {
    Dimensions,
    Keyboard,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router';
import OTPVerification from '@/components/otpVerification';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Verification = () => {
    const theme = useTheme();
    const router = useRouter();

    const [code, setCode] = useState("")

    const validateCode = (value: string) => {
        let isValid = false;
        if (value.trim().length !== 4) {
            isValid = false
        } else {
            Keyboard.dismiss()
            isValid = true
        }
        return isValid
    }

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.inputContainer}>
                    {/* Form field welcome text */}
                    <Text variant='titleLarge' style={{ fontWeight: 700 }}>Enter confirmation code</Text>
                    <Text style={{ color: '#646464', paddingVertical: 4 }}>
                        Enter the 4-digit code sent to you at <Text style={{ fontWeight: 500 }}>070 6742 1332</Text>
                    </Text>
                    <TouchableOpacity activeOpacity={.5} onPress={() => router.back()}>
                        <Text style={{ color: theme.colors.primary, fontWeight: 600, textDecorationLine: 'underline' }}>
                            Change your mobile number?
                        </Text>
                    </TouchableOpacity>


                    {/* User input field */}
                    <View style={styles.formField}>
                        {/* OTP input */}
                        <OTPVerification
                            inputCount={4}
                            setCode={setCode} />

                        <Button mode='contained' disabled={!validateCode(code)}
                            onPress={() => { router.push("(auth)/createPassword") }}
                            style={{
                                backgroundColor: theme.colors.primary,
                                width: '100%', padding: 4, marginTop: 4
                            }}>
                            Confirm
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
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
    inputContainer: {
        width: windowWidth,
        paddingHorizontal: 12,
    },
    formField: {
        marginVertical: 22,
        gap: 24
    }
})

export default Verification