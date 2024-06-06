import { Tabs } from "expo-router"
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
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
                    headerTitle: "Home",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen name="earnings"
                options={{
                    title: 'Earnings',
                    headerTitle: "My Earnings",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="wallet-outline" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen name="messages"
                options={{
                    title: 'My Message',
                    headerTitle: "Message",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="message1" size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    headerShown: false,
                    headerTitle: "Profile",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user" size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout