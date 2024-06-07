import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Text, TextInput as Input, useTheme } from "react-native-paper"
import PhoneInput from "react-native-phone-number-input";

interface PhoneNumberInputProps {
  labelText: string;
  value: string;
  setPhoneValue: (text: string) => void;
  setCountry: (country: string) => void;
  placeholder: string
}

interface PasswordInputProps {
  labelText: string;
  showForgotPassword?: boolean
}

type Props = React.ComponentProps<typeof Input> & { errorText?: string; labelText: string };


// const theme = useTheme();


export const PasswordInput = ({ labelText, showForgotPassword }: PasswordInputProps) => {
  return (
    <View>
      <Text style={styles.labelStyle}>
        {labelText}
      </Text>
      <Input
        mode='outlined'
        secureTextEntry
        underlineColor="transparent"
        selectionColor={useTheme().colors.secondary}
        // right={<TextInput.Icon icon="eye" />}
        placeholder="Enter your password"
        outlineStyle={styles.outlineStyles}
        contentStyle={styles.contentStyle}
      />
      {showForgotPassword && <TouchableOpacity activeOpacity={.7}>
        <Text style={{
          color: '#535353',
          paddingRight: 8,
          paddingVertical: 4,
          fontSize: 12,
          alignSelf: 'flex-end'
        }}>
          Forgot Password
        </Text>
      </TouchableOpacity>}
    </View>
  )
}

export const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  return (
    <View>
      <Text style={styles.labelStyle}>
        {props.labelText}
      </Text>
      <PhoneInput
        value={props.value}
        defaultCode="NG"
        layout="first"
        containerStyle={styles.phoneContainerStyle}
        textContainerStyle={styles.textContainerStyle}
        textInputStyle={{ ...styles.textStyle, fontSize: 14, color: "#646464" }}
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

export const TextInput = ({ errorText, labelText, ...props }: Props) => (
  <View>
    <Text style={styles.labelStyle}>
      {labelText}
    </Text>
    <Input
      outlineStyle={styles.outlineStyles}
      contentStyle={styles.contentStyle}
      selectionColor={useTheme().colors.secondary}
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {errorText ? <Text style={{ ...styles.labelStyle, ...styles.error }}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  outlineStyles: {
    borderRadius: 24,
    borderWidth: 1,
    elevation: 2,
    height: 55,
  },
  contentStyle: {
    width: "100%",
    fontSize: 14,
    color: "#646464"
  },
  phoneContainerStyle: {
    width: '100%',
    height: 55,
    // borderColor: "#F97B0E",
    borderRadius: 24,
    borderWidth: 1,
    elevation: 2
  },
  error: {
    color: "#FF5C00",
  },
  labelStyle: {
    color: '#535353',
    paddingLeft: 8,
    paddingVertical: 4,
    fontSize: 12
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