import { PhoneNumberInput, TextInput } from '@/components/input';
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
import DropdownSelect from 'react-native-input-select';

const windowWidth = Dimensions.get('window').width

const ProfileSetup = () => {
    const theme = useTheme();
    const router = useRouter();

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [gender, setGender] = useState<string>("")


    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'space-between' }}>

                <View style={styles.inputContainer}>

                    {/* Form field welcome text */}
                    <Text variant='titleLarge' style={{ fontWeight: 700 }}>Set up profile</Text>
                    <Text style={{ color: '#646464', marginTop: 4 }}>
                        Please provide your personal information below
                    </Text>

                    {/* User input field */}
                    <View style={styles.formField}>
                        {/* firstname */}
                        <TextInput labelText='First Name*' placeholder='Firstname' autoFocus />

                        {/* lastname */}
                        <TextInput labelText='Last Name*' placeholder='Lastname' />

                        {/* phone number */}
                        <PhoneNumberInput
                            labelText='Enter your mobile number*'
                            setPhoneValue={setPhoneNumber}
                            value={phoneNumber}
                            placeholder="Mobile Number"
                            setCountry={setCountry} />

                        {/* email address */}
                        <TextInput labelText='Enter email address*' placeholder='Email Address' />

                        {/* gender */}
                        <DropdownSelect
                            label="Gender*"
                            placeholder="Select Gender"
                            labelStyle={{ marginBottom: 4, color: "#535353" }}
                            dropdownStyle={{
                                borderRadius: 28,
                                borderWidth: 1,
                                elevation: 2,
                                height: 55,
                            }}
                            placeholderStyle={{ color: '#535353' }}
                            options={[
                                { name: 'Male', value: 'Male' },
                                { name: 'Female', value: 'Female' },
                                { name: 'Others', value: 'Others' },
                            ]}
                            optionLabel={'name'}
                            optionValue={'value'}
                            selectedValue={gender}
                            onValueChange={(itemValue: any) => setGender(itemValue)}
                            dropdownErrorStyle={{
                                borderColor: 'red',
                                borderWidth: 2,
                                borderStyle: 'solid',
                            }}
                            dropdownErrorTextStyle={{ color: 'red', fontWeight: '500' }}
                        />

                        <Button mode='contained'
                            onPress={() => { router.push("(auth)/vehicleDetails") }}
                            style={{
                                backgroundColor: theme.colors.primary,
                                width: '100%', padding: 4,
                            }}>
                            Update Vehicle Information
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
        paddingTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff'
    },
    inputContainer: {
        width: windowWidth,
        paddingHorizontal: 12,
    },
    formField: {
        marginVertical: 22,
        gap: 14
    }
})

export default ProfileSetup