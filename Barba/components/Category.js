import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';

const Category = ({ name, icon, iconColor, backgroundColor, onPress , background }) => {
    const { colors, dark } = useTheme();
    // console.log(iconPresson)
  return (
    <View style={icon ? styles.container2  : styles.container1}>
        <TouchableOpacity 
           onPress={onPress}
           style={[styles.iconContainer, {
            backgroundColor: backgroundColor
           }]}>
            <Image />
            <Image
                source={icon || background}
                resizeMode='contain'
                style={icon ? [styles.icon] : [styles.background]}
            />
        </TouchableOpacity>
        {name && <Text style={[styles.name, { color: colors.text }]}>{name}</Text>}
    </View>
  )
};

const styles = StyleSheet.create({
    container1: {
        flexDirection: "column",
        alignItems: "center",
        marginTop : 25,
        marginBottom : 15,
        width: (SIZES.width - 32)/6
    },
    container2: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 12,
        width: (SIZES.width - 90)/3
    },
    background : {
        height: 70,
        marginLeft : 30,
        width: 70,
        borderWidth: 1.3,
        borderRadius: 100,
    },
    iconContainer: {
        width: 54,
        height: 54,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    icon: {
        height: 40,
        width: 40
    },
    name: {
        fontSize: 14,
        fontFamily: "semiBold",
        color: COLORS.black,
    }
})

export default Category