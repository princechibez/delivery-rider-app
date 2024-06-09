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
import French from '../../../assets/images/french.png'
import English from "../../../assets/images/english.png"

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const SelectLanguage = () => {
    const theme = useTheme();
    const router = useRouter();

    const [option, setOption] = useState<"english" | "french">("english")

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />

            <View style={styles.inputContainer}>
                {/* Form field welcome text */}
                <Text variant='titleLarge' style={{ fontWeight: 700 }}>Select Language</Text>

                <View style={styles.credentialSection}>

                    <TouchableOpacity activeOpacity={.5}
                        onPress={() => setOption("english")}
                        style={styles.cardStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={English} />
                            <Text>English - GB</Text>
                        </View>
                        <RadioButton
                            value='english'
                            status={option === 'english' ? 'checked' : 'unchecked'}
                            onPress={() => setOption('english')} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.5}
                        onPress={() => setOption("french")}
                        style={{ ...styles.cardStyle, borderBottomWidth: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={French} />
                            <Text>French</Text>
                        </View>
                        <RadioButton
                            value='french'
                            status={option === 'french' ? 'checked' : 'unchecked'}
                            onPress={() => setOption('french')} />
                    </TouchableOpacity>

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
    credentialSection: {
        width: '100%',
        marginVertical: 20,
        gap: 14
    },
    cardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: .5,
        borderBottomColor: '#C2C2C2'
    }
})

export default SelectLanguage