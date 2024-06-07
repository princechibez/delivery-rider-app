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

const UpdateName = () => {
    const theme = useTheme();
    const router = useRouter();

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

            <View style={styles.inputContainer}>
                {/* Form field welcome text */}
                <Text variant='titleLarge' style={{ fontWeight: 700 }}>Update your name</Text>
                <Text style={{ color: '#646464', marginTop: 4, paddingRight: 18 }}>
                    Please enter your name as it appears on your ID or passport
                </Text>

                {/* User input field */}
                <View style={styles.formField}>
                    <TextInput
                        labelText="First Name*"
                        placeholder='John'
                        value={firstname}
                        onChange={() => { }} />

                    <TextInput
                        labelText="Last Name*"
                        placeholder='Williams'
                        value={lastname}
                        onChange={() => { }} />

                </View>
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
        // justifyContent: 'center',
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
        marginVertical: 32,
        gap: 10
    }
})

export default UpdateName