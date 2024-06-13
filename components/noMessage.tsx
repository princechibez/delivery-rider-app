import { StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { Text } from 'react-native-paper'

const NoMessage = ({ senderName }: { senderName: string }) => {
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay
                // loop={false}
                speed={0.5}
                style={{
                    width: 300,
                    height: 300,
                    marginBottom: -40
                }}
                source={require('../assets/animations/hola.json')}
            />
            <Text variant='bodyLarge'>Say Hi to {senderName}</Text>
        </View>
    )
}

export default NoMessage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})