import { View, StatusBar, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { Text } from 'react-native-paper'

import CustomMapView from '@/components/customMapView'


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
    position: 'relative'
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