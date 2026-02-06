import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';
import FAB from '../components/FAB';

export default function GroupsScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-white">

      {/*  Reusable Header */}
      <AppHeader
        title="Groups"
        showBack
        showBell
        onBackPress={() => navigation.goBack()}
      />

      {/* Scrollable content */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingTop: 140,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6">
          {/* FEATURED GROUPS SECTION */}
          <View className="flex-row flex-wrap justify-start mb-5">
            <View className="items-center mr-5 mb-4">
              <View className="w-20 h-20 rounded-full bg-[#00ADEF] justify-center items-center mb-2">
                <Icon name="account-group" size={34} color="#FFFFFF" />
              </View>
              <Text className="w-20 text-[13px] font-semibold text-[#6B7280] text-center">
                Testers of Mobile App
              </Text>
            </View>

            <View className="items-center mr-5 mb-4">
              <View className="w-20 h-20 rounded-full overflow-hidden mb-2.5">
                <Image
                  source={require('../assets/images/picture1.jpeg')}
                  className="w-full h-full"
                />
              </View>
              <Text className="w-20 text-[13px] font-semibold text-[#6B7280] text-center">
                Bounteous Test Group
              </Text>
            </View>
          </View>

          {/* JOIN TEXT SECTION */}
          <View className="mt-3 items-center">
            <Text className="text-sm text-[#4B5563] text-center mb-1 font-bold">
              Are you looking for a group to join?
            </Text>
            <Text className="text-sm text-[#4B5563] text-center font-bold">
              Visit <Text className="text-[#00ADEF]">xyz.com</Text>
            </Text>
            <View className="h-[1px] w-full bg-[#4B5563]/30 mt-9" />
          </View>

          {/* GROUP CODE SECTION */}
          <View className="mt-14 px-2">
            <Text className="text-xl font-bold text-[#111827] mb-12">
              Do you have a Group Code?
            </Text>

            <View className="flex-row justify-between w-full max-w-[320px] self-center mb-9">
              {Array.from({ length: 6 }).map((_, index) => (
                <TextInput
                  key={index}
                  className="w-11 h-14 rounded-lg bg-white border-[1.5px] border-[#00ADEF] text-center text-lg font-bold"
                  keyboardType="number-pad"
                  maxLength={1}
                />
              ))}
            </View>

            <TouchableOpacity className="self-center bg-[#E5E7EB] py-3.5 px-8 rounded-full mt-9">
              <Text className="color-[#374151] text-[15px] font-bold tracking-wide">
                JOIN THE GROUP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/*  Reusable FAB */}
      <FAB />
    </View>
  );
}
