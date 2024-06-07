import { PhoneNumberInput } from '@/components/input';
import { useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import { Button, RadioButton, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import WhatsappIcon from '../../assets/images/whatsapp.png'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const UpdatePhone = () => {
    const theme = useTheme();
    const router = useRouter();

    const [phoneNumber, setPhoneNumber] = useState("")
    const [country, setCountry] = useState("")
    const [option, setOption] = useState<"sms" | "whatsapp">("sms")

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

            <View style={styles.inputContainer}>
                {/* Form field welcome text */}
                <Text variant='titleLarge' style={{ fontWeight: 700 }}>Update your number</Text>
                <Text style={{ color: '#646464', marginTop: 4, paddingRight: 18 }}>
                    We'll send a code for verification
                </Text>

                {/* User input field */}
                <View style={styles.formField}>
                    <PhoneNumberInput
                        labelText='Enter your mobile number*'
                        setPhoneValue={setPhoneNumber}
                        value={phoneNumber}
                        placeholder="Mobile Number"
                        setCountry={setCountry} />
                </View>

                <View style={styles.optionsContainer}>

                    <TouchableOpacity activeOpacity={.5}
                        onPress={() => setOption("sms")}
                        style={styles.optionStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <AntDesign name="user" size={18} color="black" />
                            <Text>Use SMS</Text>
                        </View>
                        <RadioButton
                            value='sms'
                            status={option === 'sms' ? 'checked' : 'unchecked'}
                            onPress={() => setOption('sms')} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}
                        onPress={() => setOption("whatsapp")}
                        style={{ ...styles.optionStyle, borderBottomWidth: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={WhatsappIcon} />
                            <Text>Use Whatsapp</Text>
                        </View>
                        <RadioButton
                            value='whatsapp'
                            status={option === 'whatsapp' ? 'checked' : 'unchecked'}
                            onPress={() => setOption('whatsapp')} />
                    </TouchableOpacity>

                </View>
            </View>


            <Text style={{ color: '#646464', marginVertical: 14, fontSize: 12 }}>
                Please enter your name as it appears on your ID or passport
            </Text>
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
    },
    optionsContainer: {
        width: '100%',
        marginVertical: 20,
        gap: 14
    },
    optionStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: .5,
        borderBottomColor: '#C2C2C2'
    }
})

export default UpdatePhone