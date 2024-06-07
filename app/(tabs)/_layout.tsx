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
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 80,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
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
                    tabBarIcon: ({ color, focused }) => (
                        <Image source={focused ? WalletActive : Wallet} />
                    )
                }}
            />
            <Tabs.Screen name="messages"
                options={{
                    title: 'My Message',
                    headerTitle: "Message",
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