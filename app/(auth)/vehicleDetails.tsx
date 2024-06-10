import { TextInput } from '@/components/input';
import { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View
} from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const VehicleDetails = () => {
    const theme = useTheme();
    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

            <View style={styles.inputContainer}>
                {/* Form field welcome text */}
                <Text variant='titleLarge' style={{ fontWeight: 700 }}>Vehicle Details</Text>
                <Text style={{ color: '#646464', marginTop: 4, paddingRight: 18 }}>
                    Please provide vehicle information below
                </Text>

                {/* User input field */}
                <View style={styles.formField}>
                    <TextInput labelText='Vehicle Registration Number*' placeholder='KTU671GU' autoFocus />
                </View>
            </View>

            <Button mode='contained'
                onPress={() => router.push("(auth)/vehicleInfo")}
                style={{
                    backgroundColor: theme.colors.primary,
                    width: '100%', padding: 4,
                }}>
                Continue
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
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        paddingVertical: 18,
        textAlign: 'center'
    },
    inputContainer: {
        width: windowWidth,
        paddingHorizontal: 12,
        marginBottom: 24
    },
    formField: {
        marginTop: 32,
        gap: 10
    }
})

export default VehicleDetails