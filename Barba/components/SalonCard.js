import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons, images } from '../constants';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeProvider';
// {
//     "id": 3,
//     "title": "پزشکت",
//     "description": "پزشکت یک اپلیکیشن جامع پزشکی و سلامتی است که به کاربران این امکان را می‌دهد که با پزشکان و مشاوران متخصص در هر زمان و مکان مشاوره آنلاین به صورت تلفنی، متنی، صوتی و تصویری داشته باشند.",
//     "params": null,
//     "image": "images/UAfOuBoVtJ0Whwc6ouASzUU1nbsLU2wkrZVTHh9I.png",
//     "sort": 2,
//     "deleted_at": null,
//     "created_at": "2024-10-29T08:50:45.000000Z",
//     "updated_at": "2024-10-29T12:47:02.000000Z",
//     "category_id": 3,
//     "type": 2,
//     "address_url": null,
//     "category": {
//         "id": 3,
//         "title": "پزشکی درمانی",
//         "description": null,
//         "params": null,
//         "image": null,
//         "sort": 2,
//         "deleted_at": null,
//         "created_at": "2024-10-29T12:41:33.000000Z",
//         "updated_at": "2024-10-29T12:41:33.000000Z"
//     }
// }
const SalonCard = ({
    title,
    image,
    rating,
    address_url,
    onPress,
    location,
    category
}) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const { colors, dark } = useTheme();

    return (
        <TouchableOpacity 
           onPress={onPress} 
            style={[styles.container, { 
                backgroundColor: dark ? COLORS.dark2 : COLORS.white
            }]}>
            <Image
                source={{ uri:`http://185.243.48.181:8093/storage/${image}`}}
                resizeMode='cover'
                style={styles.courseImage}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.topContainer}>
                <Text style={[styles.name, { 
                    color: dark  ? COLORS.white : COLORS.greyscale900
                }]}>{title}</Text>
                    <TouchableOpacity
                        onPress={() => setIsBookmarked(!isBookmarked)}>
                        <Image
                            source={isBookmarked ? icons.bookmark2 : icons.bookmark2Outline}
                            resizeMode='contain'
                            style={[styles.bookmarkIcon, {
                                tintColor: isBookmarked ? COLORS.primary : COLORS.primary
                            }]}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{display : 'flex' , height : 50}}>
                    <Text style={styles.location}>{location}</Text>
                    <Text style={styles.category}>دسته بندی : {category.title}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star-half-empty" size={14} color="orange" />
                    <Text style={styles.rating}> {" "}{rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:"center",
        height: 128,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 0,
        marginVertical: 8
    },
    courseImage: {
        width: 104,
        height: 104,
        borderRadius: 16,
        marginRight: 16,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryContainer: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: COLORS.transparentTertiary,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryName: {
        fontSize: 14,
        fontFamily: 'semiBold',
        color: COLORS.primary
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    name: {
        marginBottom : 10,
        fontSize: 16,
        fontFamily: 'bold',
        color: COLORS.black,
        // marginVertical: 10,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6
    },
    price: {
        fontSize: 18,
        fontFamily: 'bold',
        color: COLORS.primary,
    },
    oldPrice: {
        fontSize: 14,
        fontFamily: 'medium',
        color: COLORS.gray,
        textDecorationLine: 'line-through',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        fontFamily: 'medium',
        color: COLORS.gray,
    },
    distance: {
        fontSize: 14,
        fontFamily: 'medium',
        color: COLORS.gray,
    },
    numStudents: {
        fontSize: 14,
        fontFamily: 'medium',
        color: COLORS.gray,
        marginLeft: 8,
    },
    location: {
        fontFamily: 'medium',
        color: COLORS.grayscale700,
        fontSize: 14,
        marginVertical: 12,
    }
    ,
    category: {
        fontFamily: 'medium',
        // padding : 0,
        // color: COLORS.grayscale700,
        fontSize: 12,
    }
})

export default SalonCard