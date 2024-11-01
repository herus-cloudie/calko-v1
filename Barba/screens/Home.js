import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SIZES, icons, images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { banners, categories , category, salonsNearbyYourLocations } from '../data';
import { useTheme } from '../theme/ThemeProvider';
import Category from '../components/Category';
import SubHeaderItem from '../components/SubHeaderItem';
import SalonCard from '../components/SalonCard';
import { getBrands, getUserService } from '../utils/endpoint';
import { getJWT, refreshToken } from '../utils/auth';

const Home = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { colors, dark } = useTheme();
  const [services , setServices] = useState();
  const [brands , setBrands] = useState();

  useEffect(() => {
    async function getBrandsAndServices() {
      const brand = await getBrands();
        const service = await getUserService();
        
        setServices(service.data.services.data)
        setBrands(brand.data.brands.data)
    }
    getBrandsAndServices()
  } , [])
  

  const renderBannerItem = ({ item }) => (
    <ImageBackground
      source={item.image} // Dynamic background image
      style={styles.bannerContainer} // Ensure the background covers the entire container
    >
      <View style={styles.bannerTopContainer}>
        <View>
          <Text style={styles.bannerDiscount}>{item.discount}</Text>
          <Text style={styles.bannerDiscountName}>{item.discountName}</Text>
        </View>
        <Text style={styles.bannerDiscountNum}>{item.discount}</Text>
      </View>
      <View style={styles.bannerBottomContainer}>
        <Text style={styles.bannerBottomTitle}>{item.bottomTitle}</Text>
        <Text style={styles.bannerBottomSubtitle}>{item.bottomSubtitle}</Text>
      </View>
    </ImageBackground>
  );

  const keyExtractor = (item) => item.id.toString();

  const handleEndReached = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const renderDot = (index) => {
    return (
      <View
        style={[styles.dot, index === currentIndex ? styles.activeDot : null]}
        key={index}
      />
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
          <View style={styles.viewLeft}>
            <Image
              source={images.user1}
              resizeMode='contain'
              style={styles.userIcon}
            />
            <View style={styles.viewNameContainer}>
               <Text style={styles.greeeting}>بانک صادرات</Text>
               <Text style={[styles.title, { 
                color: dark ? COLORS.white : COLORS.greyscale900
               }]}> سلام امیر مسلمی</Text>
            </View>
          </View>
          <View style={styles.viewRight}>
            <TouchableOpacity
             onPress={()=>navigation.navigate("Notifications")}>
              <Image
                source={icons.notificationBell2}
                resizeMode='contain'
                style={[styles.bellIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
              />
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>navigation.navigate("MyBookmark")}>
              <Image
                source={icons.bookmarkOutline}
                resizeMode='contain'
                style={[styles.bookmarkIcon, { tintColor: dark ? COLORS.white : COLORS.greyscale900 }]}
              />
            </TouchableOpacity>
          </View>
      </View>
    )
  }
  const renderSearchBar = ()=>{

    const handleInputFocus = () => {
      // Redirect to another screen
      navigation.navigate('Search');
    };

    return (
      <TouchableOpacity
        onPress={()=>navigation.navigate("Search")}
        style={[styles.searchBarContainer, { 
          backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
          }]}>
        <TouchableOpacity>
          <Image
            source={icons.search2}
            resizeMode='contain'
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          placeholder='جستجو'
          placeholderTextColor={COLORS.gray}
          style={styles.searchInput}
          onFocus={handleInputFocus}
        />
        <TouchableOpacity>
          <Image
            source={icons.filter}
            resizeMode='contain'
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
  const renderBanner = () => {
    return (
      <> 
       <FlatList
          data={banners}
          renderItem={renderBannerItem}
          keyExtractor={keyExtractor}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x / SIZES.width
            );
            setCurrentIndex(newIndex);
          }}
        />
        <View style={styles.dotContainer}>
          {banners.map((_, index) => renderDot(index))}
        </View>
      </>
    );
  };

  const renderCategories = () => {
    
    return (
      <View>
        <SubHeaderItem
          title="دسته بندی"
        />
        <ScrollView horizontal={true}>
          <FlatList
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            horizontal={false}
            numColumns={5} 
            renderItem={({ item, index }) => (
              <Category
                name={item.name}
                icon={item.icon}
                iconColor={item.iconColor}
                backgroundColor={item.backgroundColor}
                onPress={() => navigation.navigate('Category', { data: item })}
              />
            )}
          />
        </ScrollView>
      </View>
    )
  }
  
  const allDiscount = () => {
    const [selectedCategories, setSelectedCategories] = useState(["1"]);

   const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: selectedCategories.includes(item.id) ? COLORS.primary : "transparent",
        padding: 10,
        display : 'flex',
        marginVertical: 5,
        borderColor: COLORS.primary,
        borderWidth: 1.3,
        borderRadius: 24,
        marginRight: 12,
      }}
      onPress={() => toggleCategory(item.id)}>
      <Text style={{
        color: selectedCategories.includes(item.id) ? COLORS.white : COLORS.primary
      }}>{item.name}</Text>
    </TouchableOpacity>
  );

    const toggleCategory = (categoryId) => {
      const updatedCategories = [...selectedCategories];
      const index = updatedCategories.indexOf(categoryId);

      if (index === -1) {
        updatedCategories.push(categoryId);
      } else {
        updatedCategories.splice(index, 1);
      }

      setSelectedCategories(updatedCategories);
    };

    return (
      <View>
          <SubHeaderItem
          title="کسب و کارها"
          onPress={() => navigation.navigate("SalonsNearbyYourLocation")}
        />

        <FlatList
          data={category}
          keyExtractor={item=>item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.categories}
          renderItem={renderCategoryItem}
        />
        
        <View style={{ backgroundColor: dark ? COLORS.dark1 : COLORS.tertiaryWhite }}>
          <FlatList
            data={brands}
            keyExtractor={item=>item.id}
            renderItem={({ item })=>{
              return (
                <SalonCard
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  rating={Math.floor(Math.random() * 5) + 1}
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
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
        {renderSearchBar()}
        {renderBanner()}
        {renderCategories()}
        {allDiscount()}
        </ScrollView>
      </View>
   </SafeAreaView>
  )
};

const styles = StyleSheet.create({

  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container:{
    flex: 1,
    backgroundColor: COLORS.white,
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 70

  },
  headerContainer: {
    flexDirection: "row-reverse",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    alignItems: "center"
  },
  userIcon: {
    width: 80,
    height: 80,
    borderRadius: 0
  },
  viewLeft: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap : 10
  },
  greeeting: {
    fontSize: 12,
    fontFamily: "regular",
    color: "gray",
    marginLeft: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: "bold",
    color: COLORS.greyscale900
  },
  viewNameContainer: {
    marginLeft: 12,
    display : 'flex',
    flexDirection : "column",
    justifyContent : "space-evenly",
    alignContent : "center",
    alignItems : "flex-end"
  },
  viewRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  bellIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
    marginRight: 8
  },
  bookmarkIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  searchBarContainer: {
    width: SIZES.width - 32,
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
    borderRadius: 12,
    height: 52,
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  searchIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.gray
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: "regular",
    marginHorizontal: 8
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: COLORS.primary
  },
  bannerContainer: {
    width :SIZES.width - 32,
    height: 120 ,
    paddingHorizontal: 28,
    paddingTop: 28,
    marginBottom :10,
    // marginTop : 15,
    borderRadius: 50,
    // backgroundColor: COLORS.dark2
  
  },
  bannerTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bannerDicount: {
    fontSize: 12,
    fontFamily: "medium",
    color: COLORS.white,
    marginBottom: 4
  },
  bannerDiscountName: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.white
  },
  bannerDiscountNum: {
    fontSize: 46,
    fontFamily: "bold",
    color: COLORS.white
  },
  bannerBottomContainer: {
    marginTop: 8
  },
  bannerBottomTitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.white
  },
  bannerBottomSubtitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.white,
    marginTop: 4
  },
  mentorContainer: {
    marginRight: 10,
    alignItems: "center"
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 999
  },
  firstName: {
    fontSize: 16,
    fontFamily: "semiBold",
    color: COLORS.dark2,
    marginTop: 6
  },
  bannerItemContainer: {
    width: "100%",
    paddingBottom: 10,
    backgroundColor: COLORS.primary,
    height: 190,
    borderRadius: 32,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height : 190p
    // gap : '50px'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.white,
  }
})

export default Home