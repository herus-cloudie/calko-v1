import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getJWT, getUserProfile } from '../utils/auth';
import { COLORS, icons } from '../constants';

const ProfileData = ({navigation}) => {
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    const getJWTAndStoreData = async () => {
      try {
        const token = await getJWT();
        const dataOfJWT = await getUserProfile(token);
        setProfileData(dataOfJWT.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    getJWTAndStoreData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.backAndHead}>
          <Text style={styles.header}>اطلاعات پروفایل</Text>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
              <Image
              source={icons.back}
              resizeMode='contain'
              style={[styles.backIcon, '#fff']} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>نام: {profileData?.first_name}</Text>
          <Text style={styles.text}>نام خانوادگی: {profileData?.last_name}</Text>
          <Text style={styles.text}>نام کاربری: {profileData?.username}</Text>
          <Text style={styles.text}>ایمیل: {profileData?.email}</Text>
          <Text style={styles.text}>سازمان: {profileData?.organization_title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backAndHead : {
    display : 'flex',
    justifyContent : 'space-between',
    alignItems : "center",
    flexDirection : 'row-reverse'
    // margin : s
  },
  safeArea: {
    flex: 1,
    fontFamily : 'regular',
    backgroundColor: COLORS.white,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Add padding for Android
  },
  container: {
    flex: 1,
    fontFamily : 'regular',
    padding: 16,
    backgroundColor: COLORS.white,
  },
  header: {
    fontFamily : 'regular',
    padding: 16,
    paddingTop : 0,
    fontSize: 30,
    // fontWeight: '700',
  },
  content: {
    padding: 16,
    fontFamily : 'regular',
    backgroundColor: '#e4f1ff',
    borderRadius: 20,
  },
  text: {
    fontFamily : 'regular',
    fontSize: 22,
    marginBottom: 8,
  },
  backIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
  },
});

export default ProfileData;