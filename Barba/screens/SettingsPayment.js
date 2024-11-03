import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import PaymentMethodItemConnected from '../components/PaymentMethodItemConnected';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';
import { getJWT, getUserProfile } from '../utils/auth';

const SettingsPayment = ({ navigation }) => {
    const { colors, dark } = useTheme();

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

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                      onPress={()=>navigation.goBack()}>
                        <Image
                            source={icons.back}
                            resizeMode='contain'
                            style={[styles.backIcon, { 
                                tintColor: dark? COLORS.white : COLORS.greyscale900
                            }]} />
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, { 
                        color: dark? COLORS.white : COLORS.greyscale900
                    }]}>محل کار جاری</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={icons.moreCircle}
                        resizeMode='contain'
                        style={[styles.moreIcon, { 
                            tintColor: dark? COLORS.secondaryWhite : COLORS.greyscale900
                        }]}/>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                {renderHeader()}
                <ScrollView
                    style={styles.settingsContainer}
                    showsVerticalScrollIndicator={false}>
                    <PaymentMethodItemConnected
                        title={profileData?.organization_title}
                        onPress={() => console.log("PayPal")}
                    />
                </ScrollView>
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    backIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.greyscale900,
        marginRight: 16
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: "bold",
        color: COLORS.greyscale900
    },
    moreIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.greyscale900
    },
    settingsContainer: {
        marginVertical: 16
    }
})

export default SettingsPayment