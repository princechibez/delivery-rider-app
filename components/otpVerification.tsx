import { View, Text, Keyboard, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import CountDownTimer from "react-native-countdown-timer-hooks";
import OTPTextInput from 'react-native-otp-textinput'
import { useTheme } from 'react-native-paper';

const OTPVerification = ({ setCode, inputCount }: { setCode: (text: string) => void, inputCount: number }) => {
    const theme = useTheme();

    const [timerStatus, setTimerStatus] = useState<'active' | 'inactive'>('inactive')

    const refTimer = useRef<any>()
    const otpInputRef = useRef<any>()


    return (
        <View>
            <OTPTextInput
                caretHidden
                ref={otpInputRef}
                inputCount={inputCount}
                autoFocus
                tintColor={theme.colors.secondary}
                offTintColor="#878787"
                handleTextChange={(text) => setCode(text)}
                textInputStyle={{
                    borderRadius: 18,
                    borderWidth: 2,
                    borderBottomWidth: 2,
                    height: 60,
                    width: 72,
                    color: "#434343",
                    fontSize: 16,
                }} />

            <View style={styles.TimerStyle}>
                <TouchableOpacity
                    activeOpacity={.5}
                    style={{ display: timerStatus === 'active' ? 'none' : 'flex' }}
                    onPress={() => {
                        setTimerStatus('active')
                        refTimer.current?.resetTimer()
                    }}>
                    <Text style={{
                        color: "#646464", fontWeight: 500
                    }}>
                        Resend code
                    </Text>
                </TouchableOpacity>
                {timerStatus === 'active' && <CountDownTimer
                    ref={refTimer}
                    timestamp={60}
                    textStyle={{...styles.timerTextStyle, fontWeight: 700}}
                    timerOnProgress={() => setTimerStatus('active')}
                    timerCallback={() => setTimerStatus("inactive")}
                />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TimerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        marginVertical: 24
    },
    timerTextStyle: {
        color: '#646464'
    }
})

export default OTPVerification