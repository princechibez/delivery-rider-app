import React, { useContext } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { Button, Text, useTheme } from 'react-native-paper'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { AuthContext } from '@/context/auth';

// HeadText
// Message
// button text
// next screen's ID
// action defines activities like signup etc...

const windowWidth = Dimensions.get('window').width

const SuccessPage = () => {
    const { signup } = useContext(AuthContext)

    const theme = useTheme();
    const router = useRouter();
    const { headText, message, buttonText, nextScreen, showButton, action } = useLocalSearchParams()

    const moveToNextScreen = () => {
        if (action === 'signup') {
            return signup()
        }
        const nextPageLink = nextScreen.toString()
        router.push(nextPageLink)
    }

    return (
        <View style={styles.root}>
            <LottieView
                autoPlay
                loop={false}
                speed={1.4}
                style={{
                    width: 200,
                    height: 200,
                    marginBottom: -32
                }}
                source={require('../../assets/animations/successfull.json')}
            />
            <Text variant='headlineSmall' style={{ fontWeight: 700 }}>{headText}</Text>
            <Text style={{ textAlign: 'center', width: '90%', lineHeight: 18, color: '#646464' }}>
                {message}
            </Text>
            {
                showButton ? <Button mode='contained'
                    onPress={moveToNextScreen}
                    style={{
                        backgroundColor: theme.colors.primary,
                        width: '100%', padding: 4, marginTop: 4
                    }}>
                    {buttonText}
                </Button> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        gap: 18
    }
})

export default SuccessPage