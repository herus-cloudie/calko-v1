import { View, Platform, Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS, icons } from '../constants'
import {  Search ,Home, Inbox, MyBooking, Profile } from '../screens'
import { useTheme } from '../theme/ThemeProvider'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    const { dark } = useTheme();
    useEffect(() => {
        
    }, [])
    
    return (
        <Tab.Navigator
            initialRouteName="خانه"  // Make "Home" the default screen
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    justifyContent: "center",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 90 : 60,
                    backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                    borderTopColor: "transparent",
                },
            }}
        >
            <Tab.Screen
                name="Explore"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={icons.search}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}
                            />
                            <Text style={{
                                ...FONTS.body4,
                                color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                            }}>جستجو</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="MyBooking"
                component={MyBooking}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={focused ? icons.document2 : icons.document2Outline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}
                            />
                            <Text style={{
                                ...FONTS.body4,
                                color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                            }}>تخفیف‌ من</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="خانه"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={focused ? icons.home : icons.home2Outline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}
                            />
                            <Text style={{
                                ...FONTS.body4,
                                color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                            }}>خانه</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={focused ? icons.chatBubble2 : icons.chatBubble2Outline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}
                            />
                            <Text style={{
                                ...FONTS.body4,
                                color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                            }}>پشتیبانی</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={focused ? icons.user : icons.userOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}
                            />
                            <Text style={{
                                ...FONTS.body4,
                                color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                            }}>پروفایل</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;
