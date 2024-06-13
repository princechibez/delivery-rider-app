import { SafeAreaView, StyleSheet, Platform, StatusBar, View, Dimensions, Image, ScrollView } from 'react-native'

import { Switch, Text } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import Avatar from '../../../assets/images/avatar.jpg'
import StarIcon from "../../../assets/images/Star.png"
import Shield from '../../../assets/images/shield.png'
import UserAvatar from "../../../assets/images/profile-avatar.png"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { useContext, useState } from 'react'
import { AuthContext } from '@/context/auth'

const windowWidth = Dimensions.get('window').width

const Profile = () => {
  const router = useRouter();
  const { signout } = useContext(AuthContext)
  const [generalNotification, setGeneralNotification] = useState<boolean>(true)
  const [actionNotification, setActionNotification] = useState<boolean>(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.SectionWrapper}>

          {/* Profile card section */}
          <View style={styles.profileHeroWrap}>
            <LinearGradient
              colors={['#ff9307f9', '#FF5C00']}
              dither
              end={{ x: 0.4, y: 0.8 }}
              style={styles.profileCard}>
              <Text variant='titleMedium' style={{ color: "#fff" }}>My Profile</Text>

              {/* profile details */}
              <View style={styles.profileDetail}>
                <Image style={styles.ImageStyle} source={Avatar} />
                <View style={{ gap: 8 }}>
                  <Text variant='titleSmall' style={{ color: "#fff" }}>Daniel Ndubisi</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      maxWidth: 50,
                      padding: 4,
                      borderRadius: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4
                    }}>
                    <Image source={StarIcon} />
                    <Text variant='bodySmall' style={{ color: "#fff" }}>5.0</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>

            {/* ride details */}
            <View style={styles.rideDetails}>
              <View style={styles.rideDetailContent}>
                <Text variant='labelLarge'>Ride Details:</Text>
                <Text variant='bodySmall'>Ride KTU671GU</Text>
              </View>
              <View style={styles.rideDetailContent}>
                <Text variant='labelLarge'>Make:</Text>
                <Text variant='bodySmall'>Suzuki CB1100, Yamaha SR400</Text>
              </View>
              <TouchableOpacity onPress={() => { router.push("profile/updateVehicleDetails") }}
                style={{
                  backgroundColor: "#F97B0E", paddingVertical: 8, marginTop: 4,
                  borderRadius: 22, paddingHorizontal: 14,
                  alignSelf: 'flex-end'
                }}>
                <Text variant='bodySmall' style={{ color: "#fff" }}>Update Vehicle</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* General */}
          <View>
            {/* <Switch value /> */}
            <Text style={{ marginBottom: 8 }} variant='titleMedium'>General</Text>
            <TouchableOpacity onPress={() => router.push("profile/personalInfo")}
              activeOpacity={0.3} style={styles.cardStyle}>
              <Image source={Shield} />
              <Text variant='bodyMedium'>Personal info</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("profile/securitySettings")}
              activeOpacity={0.3} style={{ ...styles.cardStyle, borderBottomWidth: 0 }}>
              <Image source={UserAvatar} />
              <Text variant='bodyMedium'>Login & security</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notifications */}
        <View style={styles.SectionWrapper}>
          <View>
            <View style={styles.notificationHeader}>
              <Text style={{ marginBottom: 8 }} variant='titleMedium'>Notifications</Text>
              <Switch value={generalNotification} onValueChange={(value) => setGeneralNotification(value)} />
            </View>
            <View style={{ ...styles.notificationContent }}>
              <View style={{ width: "80%" }}>
                <Text style={{ marginBottom: 8, lineHeight: 16 }} variant='bodyMedium'>
                  Receive push notification on every actions on motosprint mobile app
                </Text>
              </View>
              <Switch value={actionNotification} onValueChange={(value) => setActionNotification(value)} />
            </View>
          </View>
        </View>

        {/* Others */}
        <View style={{ ...styles.SectionWrapper, borderBottomWidth: 0 }}>
          <Text style={{ marginBottom: 8 }} variant='titleMedium'>Others</Text>
          <TouchableOpacity onPress={() => { router.push("profile/language") }}
            activeOpacity={0.3} style={{ ...styles.cardStyle, borderBottomWidth: 0 }}>
            <FontAwesome5 name="flag" size={18} color="black" />
            <Text variant='bodyMedium'>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { signout() }}
            activeOpacity={0.3} style={styles.cardStyle}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text variant='bodyMedium'>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}
            activeOpacity={0.3} style={{ ...styles.cardStyle, borderBottomWidth: 0 }}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
            <Text variant='bodyMedium'>Delete Account</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: windowWidth,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 8 : 8,
    alignItems: 'center',
  },
  SectionWrapper: {
    width: "100%",
    height: "auto",
    borderBottomWidth: 4,
    padding: 18,
    borderBottomColor: "#E2E2EF"
  },
  profileHeroWrap: {
    height: 250,
    borderRadius: 24,
    marginBottom: 24,
    backgroundColor: "#F5F5F5"
  },
  profileCard: {
    height: "55%",
    justifyContent: 'space-between',
    borderRadius: 24,
    padding: 14
  },
  ImageStyle: {
    height: 70,
    width: 70,
    borderRadius: 50,
    objectFit: 'cover'
  },
  profileDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rideDetails: {
    height: "45%",
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 8,
    gap: 5
  },
  rideDetailContent: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#C2C2C2'
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notificationContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Profile