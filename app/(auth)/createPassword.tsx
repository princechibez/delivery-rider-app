import { PasswordInput } from '@/components/input';
import { useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View
} from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router';
// import PassMeter from "react-native-passmeter";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const CreatePassword = () => {
    const theme = useTheme();
    const router = useRouter();

    const [password, setPassword] = useState("Prince01@sjdnfad/d.dfba")

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.inputContainer}>
                    {/* Form field welcome text */}
                    <Text variant='titleLarge' style={{ fontWeight: 700 }}>Create password</Text>
                    <Text style={{ color: '#646464', marginTop: 4 }}>
                        Let create a new password for your account
                    </Text>

                    {/* User input field */}
                    <View style={styles.formField}>
                        <PasswordInput labelText='Password*' />
                        <PasswordInput labelText='Confirm Password*' />
                        {/* <PassMeter
                            // showLabels
                            password={password}
                            maxLength={15}
                            minLength={6}
                            labels={["Too Short", "Weak", "Normal", "Strong", "Secure"]}
                        /> */}

                        <Button mode='contained'
                            onPress={() => router.push({
                                pathname: "(auth)/successPage", params: {
                                    headText: "Awesome!",
                                    message: "Your MOTOSPRINT account has been created successfully, please set up your profile to get verified",
                                    buttonText: "Continue",
                                    showButton: "true",
                                    nextScreen: "(auth)/profileSetup"
                                }
                            })}
                            style={{
                                backgroundColor: theme.colors.primary,
                                width: '100%', padding: 4, marginTop: 24
                            }}>
                            Submit Password
                        </Button>
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
        gap: 10
    }
})

export default CreatePassword