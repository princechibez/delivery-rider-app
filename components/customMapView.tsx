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
    const [permissionStatus, setPermissionStatus] = useState<any>()
    const [coordinates, setCoordinates] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta
    });

    useEffect(() => {
        (async () => {

            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                setPermissionStatus(status)

                if (status !== 'granted') {
                    setTimeout(() => {
                        Linking.openSettings()
                    }, 2000);
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('Please enable location', ToastAndroid.SHORT);
                    }
                    return;
                }
            } catch (err) {
                console.log(err)
            }

            try {
                let location = await Location.getCurrentPositionAsync({ accuracy: 6, });
                const { latitude, longitude } = location.coords
                setCoordinates({ ...coordinates, latitude, longitude, latitudeDelta, longitudeDelta });
            } catch (err) {
                let location = await Location.getCurrentPositionAsync({ accuracy: 6, });
                const { latitude, longitude } = location.coords
                setCoordinates({ ...coordinates, latitude, longitude, latitudeDelta, longitudeDelta });
            }
        })()
    }, [])


    const SetMapView = useCallback(() => (
        <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={coordinates}
            showsUserLocation={true}
            showsCompass
            loadingEnabled={true}>
            <Marker onPress={openModal} coordinate={coordinates}>
                {/* <Image source={MarkerImage} /> */}
                < LottieView
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
    ), [permissionStatus, coordinates])

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