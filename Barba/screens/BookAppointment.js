import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeProvider';
import { ChangeServiceStatus, getServiceByBrandAndUser, getUserServicesStatus } from '../utils/endpoint';
import Button from '../components/Button';

const BookAppointment = ({ route }) => {
  const { dark } = useTheme();
  const { data } = route.params;
  const [discounts, setDiscounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usedId, setUsedId] = useState([]);

  // Fetch discounts data
  async function getData() {
    setLoading(true);
    const Data = await getServiceByBrandAndUser(data.id);
    setDiscounts(Data.data.services.data);
    setLoading(false);
  }

  // Fetch used discount IDs
  async function CheckIfCodeHaveUsed() {
    const Data = await getUserServicesStatus();
    console.log(Data.data.codes.data.map(item => item.code_voucher))
    setUsedId(Data.data.codes.data.map(({ code_voucher }) => code_voucher.id));
  }

  useEffect(() => {
    getData();
    CheckIfCodeHaveUsed();
  }, []);

  const changeCodeStatus = async (id) => {
    await ChangeServiceStatus(id);
    CheckIfCodeHaveUsed();
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : discounts?.length === 0 ? (
          <Text style={styles.noDiscountText}>تخفیفی برای این کسب و کار وجود ندارد!</Text>
        ) : (
          discounts.map((item) => {
            const isUsed = usedId.includes(item.id);
            return (
              <View key={item.id} style={styles.sectionOne}>
                <Text style={styles.sectionTitle}>{item?.voucher.title}</Text>
                <Text style={styles.sectionpTitle}>{item?.voucher.value} درصدی</Text>
                <Text style={styles.sectionContent}>تعداد استفاده: {item.voucher.max_use} بار</Text>
                <Button
                  onPress={() => !isUsed && changeCodeStatus(item.id)}
                  filled
                  style={isUsed ? styles.buttonUsed : styles.buttonAvailable}
                  title={isUsed ? `کد تخفیف: ${item.code}` : "دریافت کد"}
                />
              </View>
            );
          })
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  },
  sectionOne: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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

export default BookAppointment;
