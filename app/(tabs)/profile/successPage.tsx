import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { Button, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router'

// HeadText
// Description text
// button text
// next screen's ID

const windowWidth = Dimensions.get('window').width

const SuccessPage = () => {
    const theme = useTheme();
    const router = useRouter();

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
                source={require('../../../assets/animations/successfull.json')}
            />
            <Text variant='headlineSmall' style={{ fontWeight: 700 }}>Awesome!</Text>
            <Text style={{ textAlign: 'center', width: '90%', lineHeight: 18, color: '#646464' }}>
                Your Vehicle Information has been updated successfully
            </Text>
            <Button mode='contained'
                onPress={() => router.push("/profile")}
                style={{
                    backgroundColor: theme.colors.primary,
                    width: '100%', padding: 4, marginTop: 4
                }}>
                Okay
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

export default SuccessPage