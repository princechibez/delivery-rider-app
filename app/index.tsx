import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native'
import { Button, Checkbox, Text, useTheme } from 'react-native-paper'
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/auth';
import BgImage from "../assets/images/onboard.png";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const onBoard = () => {
  const theme = useTheme();
  const { setUserBoarding } = useContext(AuthContext)
  const [checked, setChecked] = useState(false);

  const setBoarded = async () => {
    setUserBoarding(checked)
  }

  return (
    <SafeAreaView style={Styles.safeView}>
      <ImageBackground style={Styles.imageBg} source={BgImage}>
        <View style={Styles.content}>

          <Text variant='titleLarge' style={{ ...Styles.headerText }}>
            Make steady income delivering parcel or documents from places to places.
          </Text>

          <Button mode='contained'
            disabled={!checked}
            onPress={setBoarded}
            style={{ backgroundColor: theme.colors.primary, width: '100%', padding: 4 }}>
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
            <Text style={Styles.privacyText} numberOfLines={2}>
              By Signing up for this application you agree to our <Text style={{ color: "#fff" }}>Terms of services. </Text>
              Learn how we use your data in our <Text style={{ color: "#fff" }}>Privacy Policy.</Text>
            </Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </SafeAreaView>
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
    width: windowWidth,
    paddingVertical: 12,
    paddingHorizontal: 8,
    // alignItems: 'flex-start',
    gap: 18
  },
  headerText: {
    color: "#fff"
  },
  privacyView: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
    paddingBottom: 12,
  },
  privacyText: {
    fontSize: 10,
    color: "#7F7F7F",
    maxWidth: "95%",
    lineHeight: 14,
  }
})

export default onBoard