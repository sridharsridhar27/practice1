import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';
import FAB from '../components/FAB';

export default function EventsScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<'featured' | 'my'>('featured');

  return (
    <View className="flex-1 bg-white">

      {/*  Reusable Header */}
      <AppHeader
        title="Events"
        showBack
        showBell
        onBackPress={() => navigation.goBack()}
      />

      {/* ---------- TAB NAVIGATION ---------- */}
      <View className="flex-row justify-center mt-4" style={{ marginTop: 140 }}>
        <TouchableOpacity
          className="items-center mx-5"
          onPress={() => setActiveTab('featured')}
        >
          <Text
            className={`text-base font-bold ${
              activeTab === 'featured'
                ? 'text-[#00ADEF]'
                : 'text-[#9CA3AF]'
            }`}
          >
            Featured Events
          </Text>
          {activeTab === 'featured' && (
            <View className="mt-1.5 h-[3px] w-28 bg-[#00ADEF] rounded-full" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center mx-5"
          onPress={() => setActiveTab('my')}
        >
          <Text
            className={`text-base font-bold ${
              activeTab === 'my'
                ? 'text-[#00ADEF]'
                : 'text-[#9CA3AF]'
            }`}
          >
            My Events
          </Text>
          {activeTab === 'my' && (
            <View className="mt-1.5 h-[3px] w-28 bg-[#00ADEF] rounded-full" />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ---------- FEATURED EVENTS ---------- */}
        {activeTab === 'featured' && (
          <View className="mt-7 px-6">
            {[
              { date: '1/30/2026', time: '7 PM', title: 'Discipleship Night' },
              { date: '2/28/2026', time: '8:30 AM', title: 'Beach Baptism' },
              {
                date: '3/13/2026',
                time: '6:30 PM',
                title: 'All Campus Night of Worship',
              },
              {
                date: '8/21/2026',
                time: '6 PM',
                title: 'Calvary Men: The Huddle',
              },
            ].map((item, index) => (
              <View
                key={index}
                className="flex-row items-center py-6 border-b-[0.5px] border-gray-100"
              >
                {/* Date/Time Column */}
                <View className="w-24 items-center">
                  <Text className="text-[13px] font-bold text-[#111111]">
                    {item.date}
                  </Text>
                  <Text className="text-[13px] font-normal text-[#111111]">
                    {item.time}
                  </Text>
                </View>

                {/* Vertical Divider */}
                <View className="w-[1px] h-11 bg-black mx-5" />

                {/* Title & Arrow */}
                <View className="flex-1 flex-row items-center justify-between">
                  <Text
                    className="text-[13px] font-medium text-[#4B5563] flex-1 leading-5 mr-2"
                    numberOfLines={2}
                  >
                    {item.title}
                  </Text>
                  <Icon name="chevron-right" size={18} color="#9CA3AF" />
                </View>
              </View>
            ))}

            {/* Middle Divider */}
            <View className="self-center w-1/3 h-[1px] bg-black my-6" />

            {/* Footer */}
            <View className="px-4">
              <Text className="text-center text-[13px] text-[#6B7280] leading-5 font-medium">
                This app curates events based on your profile. For all events on
                the calendar, visit{' '}
                <Text className="text-[#00ADEF] font-bold">
                  xyz.org/Calendar
                </Text>
              </Text>
            </View>
          </View>
        )}

        {/* ---------- MY EVENTS EMPTY STATE ---------- */}
        {activeTab === 'my' && (
          <View className="mt-14 px-8 items-center">
            <Text className="text-base font-bold text-[#6B7280] text-center">
              You're not currently registered for any events
            </Text>

            <View className="h-6" />

            <Text className="text-sm font-medium text-[#6B7280] text-center leading-5">
              To find out about upcoming events, select the Events tab below or
              visit
            </Text>
            <Text className="text-sm font-bold text-[#00ADEF] mt-1.5">
              xyz.org/calendar
            </Text>
          </View>
        )}
      </ScrollView>

      {/* FAB */}
      <FAB />
    </View>
  );
}
