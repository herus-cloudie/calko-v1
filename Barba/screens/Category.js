import { View,StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';
import SubHeaderItem from '../components/SubHeaderItem';
import SalonCard from '../components/SalonCard';
import { getBrands } from '../utils/endpoint';

const CategoryScreen = ({ navigation , route }) => {
    const [brands , setBrands] = useState();
    const [loading , setLoading] = useState(false);
    useEffect(() => {
      async function getBrandsAndServices() {
        setLoading(true)
        const brand = await getBrands(); 
        setBrands(brand?.data.brands.data)
        setLoading(false)
      }
      getBrandsAndServices()
    } , [])
    const { dark, colors } = useTheme();
    const { data } = route.params;

   const categories = [
        { id: "1", name: "همه", navigation: "All" },
        { id: "2", name: "پزشکی درمانی", navigation: "Healthcare" },
        { id: "3", name: "رستوران", navigation: "Restaurant" },
        { id: "4", name: "بیمه", navigation: "Insurance" },
        { id: "5", name: "آرایشی و بهداشتی", navigation: "Beauty" },
        { id: "6", name: "گردشگری", navigation: "Tourism" },
        { id: "7", name: "خشکبار", navigation: "Dry Goods" },
        { id: "8", name: "فرهنگی و آموزشی", navigation: "Education" },
        { id: "9", name: "لوازم خانگی", navigation: "Home Appliances" },
        { id: "10", name: "وسیله نقلیه", navigation: "Vehicles" },
        { id: "11", name: "نرم افزاری", navigation: "Software" },
    ];

    function getCategoryNamesByNavigation(navigation) {
        return categories
            .filter(category => category.navigation === navigation)
            .map(category => category.name);
    }

    const categoryNames = getCategoryNamesByNavigation(data.navigation);

  const allDiscount = () => {
    const filterBrands = brands?.filter(item => item.category.title == categoryNames[0])
    
    return (
      <View>
          <SubHeaderItem
          title={route.params.data.name}
          onPress={() => navigation.navigate("SalonsNearbyYourLocation")}
        />
        
        <View style={{ backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite }}>
          <FlatList
            data={filterBrands}
            keyExtractor={item=>item.id}
            renderItem={({ item })=>{
              return(
                <SalonCard
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  loading={loading}
                  rating={'4.5'}
                  location={'تهران'}
                  onPress={() => navigation.navigate('SalonDetails', { data: item })}
                  categoryId={item.id} 
                />
              )
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {allDiscount()}
        </ScrollView>
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
 linkItem : {color : COLORS.secondary},
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    width: SIZES.width - 32,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 32,
    zIndex: 999,
    left: 16,
    right: 16
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white
  },
  contentContainer: {
    marginHorizontal: 16
  },
  salonHeaderContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12
  },
  salonName: {
    fontSize: 24,
    fontFamily: "bold",
    color: COLORS.black,
  },
  salonBtn: {
    width: 72,
    height: 30,
    borderRadius: 24,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  salonBtnText: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.white,
  },
  salonItemContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap : 5
  },
  locationIcon: {
    width: 14,
    height: 14,
    tintColor: COLORS.secondary,
    marginRight: 8
  },
  locationText: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.grayscale700,
  },
  starMiddleIcon: {
    width: 14,
    height: 14,
    tintColor: COLORS.secondary,
    marginRight: 8
  },
  starMiddleText: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.grayscale700,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  separateLine: {
    width: SIZES.width - 32,
    height: 1,
    backgroundColor: COLORS.grayscale200
  },
   bottomTitle: {
    fontSize: 24,
    fontFamily: "semiBold",
    color: COLORS.black,
    textAlign: "center",
    marginTop: 12
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 12,
    width: SIZES.width - 32
  }
})

export default CategoryScreen;
