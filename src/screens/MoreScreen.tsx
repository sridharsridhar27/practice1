import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';
import FAB from '../components/FAB';

export default function MoreScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#00ADEF" />

      {/* 🔵 Reusable Header */}
      <AppHeader
        title="More"
        showBack
        showBell
        onBackPress={() => navigation.goBack()}
      />

      {/* Scrollable Content */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 140,   // 👈 push content below header
          paddingBottom: 100,
        }}
      >
        <View className="px-4">
          {[
            'Edit Profile',
            'Contact Us',
            'Delete Your Account',
            'App Feedback',
            'Version',
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="py-5 px-5 border-b-[0.5px] border-gray-100"
              onPress={() => {
                if (item === 'Edit Profile') {
                  navigation.navigate('EditProfile');
                }
              }}
            >
              <View className="flex-row items-center justify-between">
                <Text className="text-base font-semibold text-[#111827]">
                  {item}
                </Text>

                {item === 'Version' ? (
                  <Text className="text-sm text-gray-400">1.0.0</Text>
                ) : (
                  <Icon name="chevron-right" size={18} color="#9CA3AF" />
                )}
              </View>
            </TouchableOpacity>
          ))}

          {/* LOG OUT BUTTON */}
          <TouchableOpacity className="mt-6 mb-5 ml-2 self-start bg-[#00ADEF] py-3 px-7 rounded-full shadow-sm active:opacity-80">
            <Text className="text-white text-[15px] font-bold tracking-wide">
              LOG OUT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* FAB */}
      <FAB />
    </View>
  );
}
