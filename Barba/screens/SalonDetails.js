import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Linking } from 'react-native';
import React, { useRef, useState } from 'react';
import { COLORS, SIZES, icons, socials } from "../constants";
import AutoSlider from '../components/AutoSlider';
import { StatusBar } from 'expo-status-bar';
import LinkItem from '../components/LinkItem';
import { TabSelection } from '../tabs';
import { ScrollView } from 'react-native-virtualized-view';
import RBSheet from "react-native-raw-bottom-sheet";
import { useTheme } from '../theme/ThemeProvider';
import SocialIcon from '../components/SocialIcon';

const SalonDetails = ({ navigation , route }) => {

  const refRBSheet = useRef();
  const { dark, colors } = useTheme();
  const { data } = route.params;

  const renderHeader = ()=>{
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
      <View style={styles.headerContainer}>
          <TouchableOpacity
           onPress={()=>navigation.goBack()}
          >
            <Image
              source={icons.back}
              resizeMode='contain'
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>setIsBookmarked(!isBookmarked)}>
            <Image
              source={isBookmarked ? icons.bookmark2 : icons.bookmark2Outline}
              resizeMode='contain'
              style={styles.bookmarkIcon}
            />
          </TouchableOpacity>
      </View>
    )
  }

  // render content
  const renderContent = ()=>{
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <View style={styles.contentContainer}>
         <View style={styles.salonHeaderContainer}>
             <Text style={[styles.salonName, { 
              color: colors.text
             }]}>{data.title}</Text>
           <TouchableOpacity 
              style={[styles.salonBtn, { 
                  backgroundColor: isOpen ? COLORS.primary : "red"
              }]}>
              <Text style={styles.salonBtnText}>{"باز"}</Text>
          </TouchableOpacity>

         </View>
         <View style={styles.salonItemContainer}>
            <Image
              source={icons.location2}
              resizeMode='contain'
              style={styles.locationIcon}
            />
            <Text style={[styles.locationText, { 
              color: dark ? COLORS.grayscale200 : COLORS.grayscale700,
            }]}>{'تهران'}</Text>
         </View>
         <View style={styles.salonItemContainer}>
            <Image
              source={icons.starMiddle}
              resizeMode='contain'
              style={styles.starMiddleIcon}
            />
            <Text style={[styles.starMiddleText, {
               marginVertical: 6 ,
               color: dark ? COLORS.grayscale200 : COLORS.grayscale700,
               }]}>4.5</Text>
         </View>

         {/* More information links */}
         <View style={styles.linkContainer}>
            <LinkItem
              style={styles.linkItem}
              name="وبسایت"
              icon={icons.explore}
              onPress={()=> Linking.openURL(data.address_url)}
            />
            <View style={styles.linkItem2}>
              <LinkItem
                name="مسیریابی"
                icon={icons.location2}
                onPress={()=> Linking.openURL(data.address_url)}
              />
            </View>
            <LinkItem
              style={styles.linkItem}
             name="اشتراک‌گذاری"
             icon={icons.send2}
             onPress={()=> Linking.openURL(data.address_url)}
            />
         </View>

         <View style={[styles.separateLine, { 
          backgroundColor: dark ? COLORS.greyscale900 : COLORS.grayscale200
         }]} />

         {/* Specialists information */}
         {/* <View>
            <SubHeaderItem
              title="متخصصان ما" 
              navTitle="دیدن همه"
              onPress={()=>navigation.navigate("OurSpecialists")}
            />
            <FlatList
              data={specialists}
              keyExtractor={item=>item.id}
              showsHorizontalScrollIndicator={false}  
              horizontal
              renderItem={({ item, index }) =>(
                <SpecialistCard
                  name={item.name} 
                  avatar={item.avatar} 
                  position={item.position}
                  onPress={()=>{console.log("Pressed")}}
                />
              )}
            />
         </View> */}
        
        <TabSelection data={data} rating={data.rating} location={data.location}/>
      </View>
    )
  }                
  return (
    <View style={[styles.area, 
     { backgroundColor: dark ? COLORS.dark1 : COLORS.white }]}>
         <StatusBar hidden />
         <AutoSlider images={[{ uri:`http://185.243.48.181:8093/storage/${data.image}`}]} />
         {renderHeader()}
         <ScrollView showsVerticalScrollIndicator={false}>
         {renderContent()}
         </ScrollView>
         <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={360}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,0.5)",
            },
            draggableIcon: {
              backgroundColor: dark ? COLORS.dark3 : COLORS.grayscale200,
            },
            container: {
              borderTopRightRadius: 32,
              borderTopLeftRadius: 32,
              height: 360,
              backgroundColor: dark ? COLORS.dark2 : COLORS.white,
              alignItems: "center",
            }
          }}
        >
          <Text style={[styles.bottomTitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>اشتراک‌ گذاری</Text>
          <View style={[styles.separateLine, { 
             backgroundColor: dark ? COLORS.grayscale700 : COLORS.grayscale200,
             marginVertical: 12
          }]} />
          <View style={styles.socialContainer}>
             <SocialIcon
               icon={socials.whatsapp}
               name="واتساپ"
               onPress={()=>console.log("WhatsApp")}
             />
             <SocialIcon
               icon={socials.twitter}
               name="ایکس"
               onPress={()=>console.log("Twitter")}
             />
             <SocialIcon
               icon={socials.facebook}
               name="فیس‌بوک"
               onPress={()=>console.log("Facebook")}
             />
             <SocialIcon
               icon={socials.instagram}
               name="اینستاگرام"
               onPress={()=>console.log("Instagram")}
             />
          </View>
          <View style={styles.socialContainer}>
              <SocialIcon
                icon={socials.yahoo}
                name="یاهو"
                onPress={()=>console.log("Yahoo")}
              />
              <SocialIcon
                icon={socials.titktok}
                name="تیک‌تاک"
                onPress={()=>console.log("Tiktok")}
              />
              <SocialIcon
                icon={socials.messenger}
                name="چت"
                onPress={()=>console.log("Chat")}
              />
              <SocialIcon
                icon={socials.wechat}
                name="وی‌چت"
                onPress={()=>console.log("Wechat")}
              />
          </View>
        </RBSheet>
    </View>
  )
};

const styles = StyleSheet.create({
 linkItem : {color : COLORS.secondary},
 linkItem2 : {opacity : .5},
  area: {
    flex: 1,
    backgroundColor: COLORS.white
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

export default SalonDetails;
