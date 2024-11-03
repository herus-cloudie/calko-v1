import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import Button from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

const AboutUs = ({data}) => {
    const [expanded, setExpanded] = useState(false);
    const navigation = useNavigation();
    const { dark } = useTheme();

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    
    return (
        <View>
            <Text style={[styles.description, { 
                color: dark ? COLORS.grayscale400 : COLORS.grayscale700,
            }]} numberOfLines={expanded ? undefined : 2}>{data.description}</Text>
            <TouchableOpacity onPress={toggleExpanded}>
                <Text style={styles.viewBtn}>
                    {expanded ? 'View Less' : 'View More'}
                </Text>
            </TouchableOpacity>

            <Text style={[styles.subtitle, { 
                color: dark ? COLORS.white : COLORS.greyscale900,
            }]}>ارتباط با {data.title}</Text>
            <Text style={styles.phoneNumber}>{'021-44001001'}</Text>


            <View style={styles.salonItemContainer}>
                <Image
                    source={icons.location2}
                    resizeMode='contain'
                    style={styles.locationIcon}
                />
                <Text style={[styles.locationText, { 
                    color: dark ? COLORS.grayscale400 : COLORS.grayscale700,
                }]}>{'تهران'}</Text>
            </View>

            <View style={[styles.locationMapContainer, { 
                backgroundColor: dark? COLORS.dark1 : COLORS.white,
            }]}>
            </View>

            <Button
              filled
              title="دریافت تخفیف"
              style={styles.bookBtn}
              onPress={() => navigation.navigate('BookAppointment', { data: data })}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    description: {
        fontSize: 14,
        color: COLORS.grayscale700,
    },
    viewBtn: {
        color: COLORS.primary,
        marginTop: 5,
        fontSize: 14,
        fontFamily: "semiBold",
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.black,
        fontFamily: "bold",
        marginVertical: 8
    },
    hoursContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8,
        width: SIZES.width - 32
    },
    hoursDay: {
        fontSize: 14,
        color: COLORS.grayscale700,
        fontFamily: "semiBold"
    },
    hours: {
        fontSize: 14,
        color: COLORS.black,
        fontFamily: "semiBold"
    },
    phoneNumber: {
        fontSize: 16,
        color: COLORS.primary,
        fontFamily: "bold",
        marginVertical: 4
    },
    viewContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginVertical: 8,
        width: SIZES.width - 32
    },
    viewLeft: {
        fontSize: 16,
        color: COLORS.black,
        fontFamily: "bold"
    },
    viewRight: {
        fontSize: 14,
        color: COLORS.primary,
        fontFamily: "semiBold"
    },
    salonItemContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    locationIcon: {
        width: 14,
        height: 14,
        tintColor: COLORS.primary,
        marginRight: 8
    },
    locationText: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.grayscale700,
    },
    locationMapContainer: {
        height: 0,
        width: "100%",
        borderRadius: 12,
        marginVertical: 16
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        borderRadius: 12,
        backgroundColor: COLORS.dark2
    },
    viewMapContainer: {
        height: 50,
        backgroundColor: COLORS.gray,
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 'auto',
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
    },
    headingLeft: {
        fontSize: 18,
        fontFamily: "Poppins Bold",
        color: COLORS.primary
    },
    headingRight: {
        fontSize: 12,
        fontFamily: "Poppins SemiBold",
        color: COLORS.primary
    },
    bookBtn: {
        marginBottom: 32,
        backgroundColor : COLORS.secondary,
        borderColor : COLORS.secondary
    }
})

export default AboutUs