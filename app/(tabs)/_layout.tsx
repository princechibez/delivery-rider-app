import { Tabs } from "expo-router"
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'

import Home from '../../assets/images/home.png';
import HomeActive from '../../assets/images/home-active.png';
import Wallet from '../../assets/images/wallet.png';
import WalletActive from '../../assets/images/wallet-active.png';
import Chat from '../../assets/images/chat.png';
import ChatActive from '../../assets/images/chat-active.png';
import Profile from '../../assets/images/profile.png';
import ProfileActive from '../../assets/images/profile-active.png';
import { Image } from "react-native";


const TabsLayout = () => {
    const ActiveTabBarItemStyle = {
        borderTopWidth: 3,
        borderTopColor: "#F97B0E"
    }

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#FF5C00",
            tabBarInactiveTintColor: "#636363",
            // tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {
                color: "#636363",
                fontSize: 12,
                // fontFamily: "Rubik"
            },
            tabBarItemStyle: {
                height: "80%",
                alignSelf: 'center',
                justifyContent: 'flex-start',
                gap: 0,
                // marginHorizontal: 18,
                // borderTopWidth: 3,
                // borderTopColor: "#F97B0E"
            },
            tabBarStyle: {
                height: 70,
                width: "100%"
            }
        }}>
            <Tabs.Screen name="index"
                options={{
                    headerShown: false,
                    title: "Home",
                    headerTitle: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Image source={focused ? HomeActive : Home} />
                    )
                }}
            />
            <Tabs.Screen name="earnings"
                options={{
                    title: 'Earnings',
                    headerTitle: "My Earnings",
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: "medium",
                        fontFamily: "Rubik"
                    },
                    tabBarIcon: ({ color, focused }) => (
                        <Image source={focused ? WalletActive : Wallet} />
                    )
                }}
            />
            <Tabs.Screen name="message"
                options={{
                    headerShown: false,
                    title: 'Message',
                    // tabBarBadge: 5,
                    // tabBarBadgeStyle: {backgroundColor: "#000"},
                    tabBarIcon: ({ color, focused }) => (
                        <Image source={focused ? ChatActive : Chat} />
                    )
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    headerTitle: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <Image source={focused ? ProfileActive : Profile} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout