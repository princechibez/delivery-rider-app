import { useRef, useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
// import GoogleIcon from '../../assets/images/googleIcon.png'
// import AppleIcon from '../../assets/images/appleIcon.png'
import { useRouter } from 'expo-router';
import CountDownTimer from "react-native-countdown-timer-hooks";
import OTPTextInput from 'react-native-otp-textinput'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Verification = () => {
    const theme = useTheme();
    const router = useRouter();

    const [code, setCode] = useState("")
    const [timerStatus, setTimerStatus] = useState<'active' | 'inactive'>('inactive')

    const refTimer = useRef<any>()
    const otpInputRef = useRef<any>()

    const validateCode = (value: string) => {
        let isValid = false;
        if (value.trim().length !== 4) {
            isValid = false
        } else {
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
                        <OTPTextInput
                            caretHidden
                            ref={otpInputRef}
                            inputCount={4}
                            autoFocus
                            tintColor={theme.colors.secondary}
                            offTintColor="#878787"
                            handleTextChange={(text) => setCode(text)}
                            textInputStyle={{
                                borderRadius: 18,
                                borderWidth: 2,
                                borderBottomWidth: 2,
                                width: 72,
                                color: "#434343",
                                fontSize: 16,
                            }} />

                        <View style={styles.TimerStyle}>
                            <TouchableOpacity
                                activeOpacity={.5}
                                disabled={timerStatus === 'active'}
                                onPress={() => {
                                    setTimerStatus('active')
                                    refTimer.current?.resetTimer()
                                }}>
                                <Text style={{
                                    color: "#646464", fontWeight: 500
                                }}>
                                    Didn't recieve code?
                                </Text>
                            </TouchableOpacity>
                            {timerStatus === 'active' && <CountDownTimer
                                ref={refTimer}
                                timestamp={60}
                                timerOnProgress={() => setTimerStatus('active')}
                                timerCallback={() => setTimerStatus("inactive")}
                            />}
                        </View>

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
    },
    TimerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    }
})

export default Verification