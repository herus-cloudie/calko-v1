import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import Header from '../components/Header';
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme } from '../theme/ThemeProvider';

const SettingsPrivacyPolicy = () => {
    const { colors, dark } = useTheme();

    return (
        <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Header title="سیاست حریم خصوصی"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={[styles.settingsTitle, { color: dark ? COLORS.white : COLORS.black }]}>۱. چه اطلاعاتی از شما می‌گیریم</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>ما ممکنه این نوع اطلاعات رو جمع کنیم:</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>اطلاعات شخصی: مثل اسم، ایمیل و چیزایی که موقع ثبت‌نام یا استفاده از خدمات به ما میدی.</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>اطلاعات استفاده: مثلا اینکه چطور از خدمات ما استفاده می‌کنی، مثل آدرس IP و دستگاهی که استفاده می‌کنی.</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>کوکی‌ها: ما از کوکی‌ها استفاده می‌کنیم تا تجربه بهتری داشته باشی و اطلاعاتی از علاقه‌مندیت جمع کنیم.</Text>
                    </View>
                    <View>
                        <Text style={[styles.settingsTitle, { color: dark ? COLORS.white : COLORS.black }]}>۲. چطور از اطلاعات شما استفاده می‌کنیم</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>از اطلاعات شما برای این کارا استفاده می‌کنیم:</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>ارائه خدمات: تا بتونیم خدمات‌مون رو بهتر و شخصی‌تر بهت ارائه بدیم.</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>ارتباط با شما: برای اینکه بتونیم سوالاتت رو جواب بدیم و اخبار مهم رو بهت بگیم.</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>تحلیل و بهبود: تا بتونیم سرویس‌ها رو بهتر کنیم و بر اساس علاقه‌مندی‌ها، محتوا رو تنظیم کنیم.</Text>
                    </View>
                    <View>
                        <Text style={[styles.settingsTitle, { color: dark ? COLORS.white : COLORS.black }]}>۳. چه وقتایی اطلاعاتتون رو به اشتراک می‌ذاریم</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>ممکنه اطلاعاتت رو در این شرایط به اشتراک بذاریم:</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>طبق قانون: وقتی قانونی مجبور باشیم که به درخواست‌های قانونی پاسخ بدیم.</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>شرکای کاری: ممکنه اطلاعاتت رو با شرکت‌هایی که بهمون در ارائه خدمات کمک می‌کنن به اشتراک بذاریم.</Text>
                        <Text style={[styles.body, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>تغییرات بزرگ: اگه یه تغییر بزرگ مثل فروش یا ادغام اتفاق بیفته، ممکنه اطلاعاتت به شرکت جدید منتقل بشه.</Text>
                    </View>
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
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 16
    },
    settingsTitle: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.black,
        marginVertical: 26
    },
    body: {
        fontSize: 14,
        fontFamily: "regular",
        color: COLORS.black,
        marginTop: 4
    }
})

export default SettingsPrivacyPolicy;
