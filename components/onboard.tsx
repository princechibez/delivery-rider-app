import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { Button, Checkbox, useTheme } from 'react-native-paper'
import { useContext, useState } from 'react';
// import BackgroundImg from "../assets/images/onboard.png"
import { AuthContext } from '@/context/auth';

const onBoard = () => {
    const theme = useTheme();
    const { setUserBoarding } = useContext(AuthContext)
    const [checked, setChecked] = useState(false);

    const setBoarded = async () => {
        setUserBoarding()
    }

    return (
        // <OnBoardImage source={{ uri: '../../assets/images/onboard.png' }}>
        <SafeAreaView style={Styles.safeView}>
            <ImageBackground style={Styles.imageBg} source={{ uri: "../assets/images/onboard.png" }}>
                <View style={Styles.content}>

                    <Text style={{ ...Styles.headerText, fontWeight: 700 }}>
                        Make steady income delivering parcel or documents from places to places.
                    </Text>

                    <Button mode='contained'
                        onPress={setBoarded}
                        style={{ backgroundColor: theme.colors.primary }}>
                        Get Started
                    </Button>

                    <TouchableOpacity activeOpacity={.9}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        style={Styles.privacyView}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                        />
                        <Text style={Styles.privacyText}>
                            By Signing up for ofwhich,
                            you agree to our <Text style={{ color: "#fff" }}>Terms of services.</Text>
                            Learn how we use your data in our <Text style={{ color: "#fff" }}>Privacy Policy.</Text>
                        </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </SafeAreaView>
        // </OnBoardImage>
    )
}

const Styles = StyleSheet.create({
    safeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBg: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        gap: 18
    },
    headerText: {
        fontSize: 20,
        color: "#fff"
    },
    privacyView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-start',
        paddingBottom: 12,
    },
    privacyText: {
        fontSize: 11,
        color: "#7F7F7F"
    }
})

export default onBoard