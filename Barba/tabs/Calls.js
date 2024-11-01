import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { callData } from '../data';
import { COLORS, icons } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const Calls = () => {
    const navigation = useNavigation();
    const { dark } = useTheme();

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() =>
                navigation.navigate('Chat', {
                    userName: item.fullName,
                })
            }
            style={[
                styles.userContainer, {
                    borderBottomWidth: dark ? 0 : 1,
                },
                index % 2 !== 0 ? {
                    backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite,
                    borderBottomWidth: dark ? 0 : 1,
                    borderTopWidth: dark ? 0 : 0
                } : null,
            ]}
        >
            <View style={styles.userImageContainer}>
                {item.isOnline && item.isOnline === true && (
                    <View style={styles.onlineIndicator} />
                )}

                <Image
                    source={item.userImg}
                    resizeMode="contain"
                    style={styles.userImage}
                />
            </View>
            <View style={{ flexDirection: "row", width: SIZES.width - 104 }}>
                <View style={[styles.userInfoContainer]}>
                    <Text style={[styles.userName, { 
                        color: dark ? COLORS.white : COLORS.black
                    }]}>{item.fullName}</Text>
                    <Text style={styles.lastSeen}>{item.lastMessage}</Text>
                </View>
                <View style={{
                    position: "absolute",
                    right: 4,
                    alignItems: "center"
                }}>
                    <Text style={[styles.lastMessageTime, { 
                        color: dark? COLORS.white : COLORS.black
                    }]}>{item.lastMessageTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
    return (
        <View>
            <FlatList
                data={callData}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    callContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        marginVertical: 12
    },
    callLeftContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    callRightContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    userImg: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    fullName: {
        fontSize: 14,
        color: COLORS.black,
        fontFamily: "bold"
    },
    userInfoContainer: {
        marginLeft: 12
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6
    },
    date: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray"
    },
    status: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray"
    },
    arrowIcon: {
        width: 12,
        height: 12,
        tintColor: COLORS.primary,
        marginRight: 6
    },
    telephoneIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    }
})

export default Calls