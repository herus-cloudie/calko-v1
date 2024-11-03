import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../constants';
import CancelledBookings from './CancelledBookings';


const BookingTabSelection = () => {
    return (
        <View>
            <View style={{ marginTop: 20 }}>
                <CancelledBookings/>
            </View>
        </View>
    );
};

export default BookingTabSelection;
