import React, { useContext } from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import ConfirmImg from '../../assets/images/confirm.png'
import { Button, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router'
import { AuthContext } from '@/context/auth'


const windowWidth = Dimensions.get('window').width

const AuthSucess = () => {
    const theme = useTheme();
    const router = useRouter();
    const { setAuthenticationStatus } = useContext(AuthContext)

    const onRegisterHandler = () => {
        setAuthenticationStatus()
        router.push("(tabs)")
    }

    return (
        <View style={styles.root}>
            <Image source={ConfirmImg} />
            <Text variant='headlineSmall' style={{ fontWeight: 700 }}>Awesome!</Text>
            <Text style={{ textAlign: 'center', width: '90%', lineHeight: 18, color: '#646464' }}>
                Your MOTOSPRINT account has been created successfully, please set up your profile to get verified
            </Text>
            <Button mode='contained'
                onPress={onRegisterHandler}
                style={{
                    backgroundColor: theme.colors.primary,
                    width: '100%', padding: 4, marginTop: 4
                }}>
                Continue
            </Button>
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

export default AuthSucess