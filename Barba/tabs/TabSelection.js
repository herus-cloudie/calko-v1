import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../constants';
import AboutUs from './AboutUs';
import Services from './Services';
import Packages from './Packages';
import OurGallery from './OurGallery';
import Reviews from './Reviews';

const TabContent = ({ tab , data , rating , location}) => {
    
    switch (tab) {
        case 'درباره‌ی ما':
            return <>
                <AboutUs data={data}  rating={rating} location={location}/>
            </>;
        case 'گالری':
            return <>
                <OurGallery />
            </>;
        case 'نظرات کاربران':
            return <>
                <Reviews />
            </>;
        default:
            return null;
    }
};

const Tabs = ['درباره‌ی ما', 'گالری', 'نظرات کاربران'];

const TabSelection = ({data , rating , location}) => {
    const [selectedTab, setSelectedTab] = useState('درباره‌ی ما');

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                paddingVertical: 10,
                paddingHorizontal: 16,
                backgroundColor: selectedTab === item ? COLORS.primary : 'transparent',
                borderColor: COLORS.primary,
                borderWidth: 1.2,
                borderRadius: 18,
                marginRight: 6,
                marginTop : 10
            }}
            onPress={() => setSelectedTab(item)}>
            <Text style={{
                fontSize: 14,
                fontFamily: "bold",
                color: selectedTab === item ? COLORS.white : COLORS.primary,
            }}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                horizontal
                data={Tabs}
                renderItem={renderItem}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
            />
            <View style={{ marginTop: 20 }}>
                <TabContent data={data} tab={selectedTab} rating={rating} location={location} />
            </View>
        </View>
    );
};

export default TabSelection;
