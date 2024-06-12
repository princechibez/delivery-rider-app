import { PhoneNumberInput, TextInput } from '@/components/input';
import { useContext, useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View
} from 'react-native'
import { Button, RadioButton, Text, useTheme } from 'react-native-paper'
import { useRouter } from 'expo-router';
import DropdownSelect from 'react-native-input-select';
import { TouchableOpacity } from 'react-native-gesture-handler';



const windowWidth = Dimensions.get('window').width

const VehicleInfo = () => {
    const theme = useTheme();
    const router = useRouter();

    const [vehicleType, setVehicleType] = useState<string>("")
    const [vehicleMake, setVehicleMake] = useState<string>("")
    const [vehicleModel, setVehicleModel] = useState<string>("")
    const [vehicleYear, setVehicleYear] = useState<string>("")
    const [vehicleColor, setVehicleColor] = useState<string>("")
    const [vehicleOwner, setVehicleOwner] = useState<"yes" | "no">("yes")
    const [vehicleYearOfPurchase, setVehicleYearOfPurchase] = useState<string>("")

    const registrationSuccessfullHandler = () => {
        router.push({
            pathname: "(auth)/successPage", params: {
                headText: "Information Sent",
                message: "Your personal and vehicle information has been sent successfully, and our customer care representative will contact you within 24hrs.",
                buttonText: "Okay",
                showButton: "true",
                action: 'signup',
                nextScreen: "(tabs)"
            }
        })
    }

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'space-between' }}>

                <View style={styles.inputContainer}>

                    {/* Form field welcome text */}
                    <Text variant='titleLarge' style={{ fontWeight: 700 }}>Vehicle Information</Text>
                    <Text style={{ color: '#646464', marginTop: 4 }}>
                        Please provide vehicle information below
                    </Text>

                    {/* User input field */}
                    <View style={styles.formField}>
                        {/* vehicle make */}
                        <TextInput labelText='Make*' placeholder='Suzuki CB1100' />

                        {/* vehicle model */}
                        <TextInput labelText='Model*' placeholder='Yamaha SR400' />

                        {/* vehicle year */}
                        <TextInput labelText='Year*' placeholder='2021' />

                        {/* vehicle color */}
                        <TextInput labelText='Color*' placeholder='Black' />

                        {/* vehicle's year of purchase */}
                        <TextInput labelText='Year of purchase*' placeholder='2023' />

                        {/* vehicle owner */}
                        <View>
                            <Text style={styles.labelStyle}>Who own the vehicle?</Text>
                            <View style={styles.radioContainer}>
                                <TouchableOpacity style={styles.radioTextRow} onPress={() => setVehicleOwner('yes')} >
                                    <RadioButton
                                        value='yes'
                                        status={vehicleOwner === 'yes' ? 'checked' : 'unchecked'} />
                                    <Text style={styles.radioText}>I do</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.radioTextRow} onPress={() => setVehicleOwner('no')}>
                                    <RadioButton
                                        value='no'
                                        status={vehicleOwner === 'no' ? 'checked' : 'unchecked'}
                                    />
                                    <Text style={styles.radioText}>Someone else</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Vehicle type */}
                        <DropdownSelect
                            label="Choose Type*"
                            placeholder="Select vehicle type"
                            labelStyle={{ marginBottom: 4, color: "#535353" }}
                            dropdownStyle={{
                                borderRadius: 28,
                                borderWidth: 1,
                                elevation: 2,
                                height: 55,
                            }}
                            options={[
                                { name: 'Bike', value: 'Bike' },
                                { name: 'Van', value: 'Van' },
                                { name: 'Car', value: 'Car' },
                            ]}
                            optionLabel={'name'}
                            optionValue={'value'}
                            selectedValue={vehicleType}
                            onValueChange={(itemValue: any) => setVehicleType(itemValue)}
                            dropdownErrorStyle={{
                                borderColor: 'red',
                                borderWidth: 2,
                                borderStyle: 'solid',
                            }}
                            dropdownErrorTextStyle={{ color: 'red', fontWeight: '500' }}
                        />

                        <Button mode='contained'
                            onPress={registrationSuccessfullHandler}
                            style={{
                                backgroundColor: theme.colors.primary,
                                width: '100%', padding: 4, marginTop: 14
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
        marginVertical: 24,
        gap: 14
    },
    labelStyle: {
        color: '#535353',
        // paddingLeft: 8,
        paddingVertical: 4,
        fontSize: 12
    },
    radioContainer: {
        flexDirection: 'row',
        gap: 24,
        alignItems: 'center',
    },
    radioTextRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
    },
    radioText: {
        color: "#535353"
    }
})

export default VehicleInfo