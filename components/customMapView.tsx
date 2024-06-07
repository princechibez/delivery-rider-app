import { View, StyleSheet, Dimensions, ToastAndroid, Platform, Linking, Image } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'
import LottieView from 'lottie-react-native'
import MarkerImage from '../assets/images/location-marker.png'

interface MapViewProps {
    openModal?: () => void
}

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const ASPECT_RATIO = windowWidth / windowHeight;
const latitudeDelta = 0.015;
const longitudeDelta = latitudeDelta * ASPECT_RATIO;


const CustomMapView = ({ openModal }: MapViewProps) => {
    const mapRef = useRef();
    // const [location, setLocation] = useState<null | Location.LocationObject>(null)
    const [coordinates, setCoordinates] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta
    });

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setTimeout(() => {
                    Linking.openSettings()
                }, 2000);
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Please enable location', ToastAndroid.SHORT);
                }
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords
            setCoordinates({ ...coordinates, latitude, longitude });
        })()
    }, [])


    const SetMapView = useCallback(() => (
        <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={coordinates}
            showsUserLocation={true}
            showsCompass={false}
            loadingEnabled={true}>
            <Marker onPress={openModal} coordinate={coordinates}>
                {/* <Image source={MarkerImage} /> */}
                <LottieView
                    autoPlay
                    // speed={1.4}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    source={require('../assets/animations/location-pointer.json')}
                />
            </Marker>
        </MapView>
    ), [coordinates])

    return (
        <>
            {SetMapView()}
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default CustomMapView