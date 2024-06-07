import { View, StatusBar, StyleSheet, Dimensions, ToastAndroid, Platform, Linking, Image } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from 'expo-location'
import LottieView from 'lottie-react-native'
import BottomSheet, { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Button, Text } from 'react-native-paper'
import CustomBackdrop from '@/components/bottomSheetBackdrop'

import MarkerImage from '../../assets/images/location-marker.png'
import CustomMapView from '@/components/customMapView'


const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const ASPECT_RATIO = windowWidth / windowHeight;
const latitudeDelta = 0.015;
const longitudeDelta = latitudeDelta * ASPECT_RATIO;


const Home = () => {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["60%", "70%"]

  const openPresentationModal = () => {
    bottomSheetModalRef.current?.present()
  }


  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        <CustomMapView openModal={openPresentationModal} />

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 38 }}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </BottomSheetModal>

        {/* <BottomSheet
        style={{ elevation: 1 }}
        backdropComponent={(props) => <CustomBackdrop {...props} />}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={["60%"]}
        animateOnMount={false}
        enableOverDrag
        enableHandlePanningGesture
        overDragResistanceFactor={5}
        enablePanDownToClose
        enableDynamicSizing
      >
        <BottomSheetView style={styles.sheetContentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet> */}
      </View>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  sheetContentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default Home