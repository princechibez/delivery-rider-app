import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text, TextInput } from "react-native-paper"
import PhoneInput from "react-native-phone-number-input";

interface PhoneNumberInputProps {
  labelText: string;
  value: string;
  setPhoneValue: (text: string) => void;
  setCountry: (country: string) => void;
  placeholder: string
}


export const PasswordInput = ({ labelText }: { labelText: string }) => {
  return (
    <View>
      <Text style={{ color: '#535353', paddingLeft: 8, paddingVertical: 4, fontSize: 12 }}>
        {labelText}
      </Text>
      <TextInput
        mode='outlined'
        secureTextEntry
        // right={<TextInput.Icon icon="eye" />}
        placeholder="Password"
        outlineStyle={{
          borderRadius: 24,
          borderWidth: 1,
          elevation: 2,
          height: 55,
          borderColor: "#878787",
        }}
        contentStyle={{ width: "100%", fontSize: 14, color: "#434343" }}
      />
      <TouchableOpacity activeOpacity={.7}>
        <Text style={{
          color: '#535353',
          paddingRight: 8,
          paddingVertical: 4,
          fontSize: 12,
          alignSelf: 'flex-end'
        }}>
          Forgot Password
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  return (
    <View>
      <Text style={{ color: '#535353', paddingLeft: 8, paddingVertical: 4, fontSize: 12 }}>
        {props.labelText}
      </Text>
      <PhoneInput
        value={props.value}
        defaultCode="NG"
        layout="first"
        containerStyle={styles.phoneInputStyle}
        textContainerStyle={styles.textContainerStyle}
        textInputStyle={{ ...styles.textStyle, fontSize: 14, color: "#434343" }}
        codeTextStyle={{ ...styles.textStyle, fontSize: 14 }}
        flagButtonStyle={styles.flagButtonStyle}
        onChangeCountry={(country) => {
          props.setCountry(country.toString());
        }}
        placeholder={props.placeholder}
        onChangeText={(text) => {
          props.setPhoneValue(text);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  phoneInputStyle: {
    width: '100%',
    height: 55,
    borderColor: "#F97B0E",
    borderRadius: 24,
    borderWidth: 1,
    elevation: 2
  },
  textContainerStyle: {
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    verticalAlign: 'middle',
    height: 50,
    backgroundColor: 'transparent'
  },
  textStyle: {
    height: 50,
    verticalAlign: 'middle'
  },
  flagButtonStyle: {
    borderRightWidth: 2,
    borderColor: "#C9C9C9",
    height: 30,
    alignSelf: 'center'
  }
})