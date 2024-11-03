import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons, images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookingTabSelection from '../tabs/BookingTabSelection';
import { useTheme } from '../theme/ThemeProvider';
import CancelledBookings from '../tabs/CancelledBookings';

const MyBooking = () => {
  const { colors, dark } = useTheme();

  /**
   * render header
   */
  const renderHeader = ()=>{
    return (
      <View style={styles.headerContainer}>
         <View style={styles.headerLeftContainer}>
            <Text style={[styles.headerTitle, {
              color: dark ? COLORS.white : COLORS.greyscale900
            }]}>تخفیف های دریافت شده</Text>
         </View>
         <View style={styles.headerRightContainer}>
            <TouchableOpacity>
              <Image
                source={icons.search}
                resizeMode='contain'
                style={[styles.searchIcon, { 
                  tintColor: dark ? COLORS.grayscale100 : COLORS.greyscale900,
                }]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.moreCircle}
                resizeMode='contain'
                style={[styles.moreIcon, { 
                  tintColor: dark ? COLORS.grayscale100 : COLORS.greyscale900,
                }]}
              />
            </TouchableOpacity>
         </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
      <View style={[styles.container, { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
        {renderHeader()}
        <CancelledBookings/>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
    marginBottom : 80
    // paddingBottom: 270
  },
  headerContainer: {
    width: SIZES.width - 32,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom : 40
  },
  headerLeftContainer: {
    flexDirection: "row-reverse",
    alignItems: "center"
  },
  logoIcon: {
    height: 32,
    width: 32,
    tintColor: COLORS.primary,
    marginRight: 16
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: "bold",
    color: COLORS.greyscale900
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.greyscale900,
    marginRight: 12
  },
  moreIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.greyscale900
  }
})

export default MyBooking