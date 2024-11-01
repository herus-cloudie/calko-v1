import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { ScrollView } from 'react-native-virtualized-view';
import DatePickerView from '../components/DatePickerView';
import { getFormatedDate } from "react-native-modern-datepicker";
import { hoursData, specialists } from '../data';
import Button from '../components/Button';
import SpecialistCard from '../components/SpecialistCard';
import { useTheme } from '../theme/ThemeProvider';
import { getServiceByBrandAndUser } from '../utils/endpoint';

const BookAppointment = ({ navigation , route }) => {
  const {colors, dark } = useTheme();
  const {data} = route.params;
  const [discounts , setDiscounts] = useState()
  useEffect(() => {
    async function getData(params) {
      const Data = await getServiceByBrandAndUser(data.id)
      setDiscounts(Data.data.services.data)
      
  console.log(Data.data.services.data)
    }
    getData()
  }, [])

  console.log(discounts)

  return (
    <SafeAreaView style={[styles.area, { 
      backgroundColor: dark ? COLORS.dark1 : COLORS.white
    }]}>
      <View style={styles.container}>
        {
          discounts?.map(item => {
            console.log(item)
            return(
              <View style={styles.sectionOne}>
                <Text style={styles.sectionTitle}>{item?.voucher.title}</Text>
                <Text style={styles.sectionpTitle}>{item?.voucher.value}درصدی </Text>
                <Text style={styles.sectionContent}>
                  تعداد استفاده : {item.voucher.max_use} بار
                </Text>
                <Text style={styles.sectionContent}>
                   کد تخفیف: {item.code} 
                </Text>
              </View>
            )
          })
        }
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
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  sectionOne: {
    backgroundColor:  COLORS.secondary,
    color : '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTwo: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionThree: {
    backgroundColor: '#90ee90',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionpTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 14,
    marginTop: 5,
  },
})

export default BookAppointment