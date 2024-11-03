import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions, FlatList } from 'react-native';
import React from 'react';
import { COLORS, SIZES as APP_SIZES, icons, images, SIZES } from '../constants'; // Renamed SIZES import
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Calls, Chats } from '../tabs';
import { Feather } from "@expo/vector-icons";
import { useTheme } from '../theme/ThemeProvider';
import { Dimensions } from 'react-native';



const Inbox = () => {
  const { colors, dark } = useTheme();


  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
 
          <Text style={[styles.headerTitle, { 
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>پشتیبانی</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={[styles.searchIcon, { 
                tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
              }]}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={icons.moreCircle}
              resizeMode='contain'
              style={[styles.moreCircleIcon, { 
                tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
              }]}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  const tickets = [
    { id: '1', title: 'مشکل در دریافت کد تخفیف برای خرید اینترنتی', trackingCode: 'CT123456', description: 'توضیحات: کاربر نمی‌تواند کد تخفیف را هنگام خرید آنلاین دریافت کند.' },
    { id: '2', title: 'خطا در صدور کد تخفیف', trackingCode: 'MT987654', description: 'توضیحات: سیستم خطا می‌دهد و کد تخفیف صادر نمی‌شود.' },
   
  ];
  
  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        <Text style={styles.title}>تیکت های شما</Text>
        <View style={styles.container}>
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.ticket}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.trackingCode} :کد پیگیری </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={() => { /* No action */ }}>
        <Text style={styles.buttonText}>ثبت تیکت</Text>
      </TouchableOpacity>
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
    padding: 16
  },
  headerContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    width: SIZES.width - 32,
    marginBottom : 20,
    justifyContent: "space-between"
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerLogo: {
    height: 36,
    width: 36,
    tintColor: COLORS.primary
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "bold",
    color: COLORS.black,
    marginLeft: 12
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black
  },
  moreCircleIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.black,
    marginLeft: 12
  },
  addPostBtn: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: COLORS.secondary,
    position: "absolute",
    bottom: 72,
    right: 16,
    zIndex: 999,
    shadowRadius: 10,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 10 }
  }
  ,
  container: {
    flex: 1,
    padding: 20,
  },
  ticket: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,
    marginRight : 2,
    marginTop : 2,
    marginLeft : 2
  },
  title: {
    fontSize: 18,
    fontFamily: 'bold',
    textAlign: 'right',
  },
  description: {
    fontFamily: "regular",
    fontSize: 14,
    marginTop : 10  ,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#007BFF', // Blue background color
    padding: 10,
    borderRadius: 5,
    marginBottom: 70,
    
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
})


export default Inbox;
