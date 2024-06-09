import { TextInput } from '@/components/input';
import { useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View
} from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const UpdateEmail = () => {
    const theme = useTheme();
    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

            <View style={styles.inputContainer}>
                {/* Form field welcome text */}
                <Text variant='titleLarge' style={{ fontWeight: 700 }}>Update your email</Text>
                <Text style={{ color: '#646464', marginTop: 4, paddingRight: 18 }}>
                    We'll send a code for verification
                </Text>

                {/* User input field */}
                <View style={styles.formField}>
                    <TextInput labelText='Enter email address*' autoFocus />
                </View>
            </View>


            <Text style={{ color: '#646464', marginVertical: 14, fontSize: 12 }}>
                Note that we will never send anything without your consent
            </Text>
            <Button mode='contained'
                onPress={() => router.back()}
                style={{
                    backgroundColor: theme.colors.primary,
                    width: '100%', padding: 4, alignSelf: 'flex-end'
                }}>
                Verify Email
            </Button>
        </SafeAreaView>
        // </OnBoardImage>
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
        width: windowWidth,
        paddingHorizontal: 12,
    },
    formField: {
        marginTop: 32,
        gap: 10
    }
})

export default UpdateEmail