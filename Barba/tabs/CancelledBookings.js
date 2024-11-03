import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS } from '../constants';
import { getUserServicesStatus } from '../utils/endpoint';

const CancelledBookings = () => {
  const [discounts, setDiscounts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const GetUsedCode = async () => {
        const sendReq = await getUserServicesStatus();
        setDiscounts(sendReq.data.codes.data);
      };
      GetUsedCode();
    }, [])
  );

  return (
    <ScrollView>  
      {
        discounts.map((item) => {
          return (
            <View key={item.code_voucher.voucher.id} style={styles.sectionOne}>
              <Text style={styles.sectionTitle}>{item?.code_voucher.voucher.title}</Text>
              <Text style={styles.sectionpTitle}>{item?.code_voucher.voucher.value} درصدی</Text>
              <Text style={styles.sectionContent}>قابلیت استفاده: {item.code_voucher.voucher.max_use} بار</Text>
              <Text>کد تخفیف: {item.code_voucher.code}</Text>
            </View>
          );
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    marginTop: 20,
    backgroundColor: COLORS.whtie,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  noDiscountText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
  buttonAvailable: {
    marginTop: 15,
    backgroundColor: COLORS.secondary,
    borderColor: 'white',
  },
  buttonUsed: {
    marginTop: 15,
    backgroundColor: COLORS.primary,
    borderColor: 'white',
    color: COLORS.white,
  },
  sectionOne: {
    backgroundColor: COLORS.secondary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    color: COLORS.white,
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
});

export default CancelledBookings;
