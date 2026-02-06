import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';

const images = [
  require('../assets/images/book1.jpeg'),
  require('../assets/images/book2.jpeg'),
  require('../assets/images/book3.jpeg'),
];

export default function DashboardScreen() {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  const data = [0, 1, 2];

  const renderCard = (title: string, description: string, image: any) => (
    <View
      style={{ width: isTablet ? 300 : width * 0.8 }}
      className="bg-white rounded-3xl mr-4 overflow-hidden shadow-md elevation-4 mb-2 max-w-[350px]"
    >
      <Image source={image} className="h-36 w-full" resizeMode="cover" />
      <View className="p-4">
        <Text className="text-lg font-bold text-[#111827] mb-2">{title}</Text>
        <Text className="text-sm text-[#4B5563] leading-5" numberOfLines={2}>
          {description}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white">

      {/*  Reusable Header */}
      <AppHeader
        title="Hi, Manikandan!"
        showBell
      />

      {/* ---------- SCROLLABLE CONTENT ---------- */}
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingTop: isTablet ? 160 : 140,
          paddingBottom: 40,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* ---------- DATE & LOCATION ---------- */}
        <View className="px-6 mt-5 max-w-[1200px] self-center w-full">
          <View className="flex-row items-center mb-2">
            <Icon name="map-marker-outline" size={18} color="#00ADEF" />
            <Text className="text-sm color-[#00ADEF] font-medium ml-1.5">
              Chennai, India
            </Text>
          </View>

          <Text className="text-3xl md:text-5xl font-bold color-[#00ADEF] mb-3">
            January 27
          </Text>
          <View className="h-[1px] bg-[#E5E7EB] w-full" />
        </View>

        {/* ---------- CONTENT SECTIONS ---------- */}
        <View className="px-6 pt-6 max-w-[1200px] self-center w-full">

          {/* Section 1 */}
          <Text className="text-xl md:text-2xl font-bold color-[#9CA3AF] mb-4">
            Get Connected
          </Text>
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => `connected-${item}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ index }) =>
              renderCard(
                'This Weekend',
                'Join us for a powerful message and worship experience.',
                images[index % images.length]
              )
            }
          />

          <View className="h-8" />

          {/* Section 2 */}
          <Text className="text-xl md:text-2xl font-bold color-[#9CA3AF] mb-4">
            Get In The Story
          </Text>
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => `story-${item}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ index }) =>
              renderCard(
                'Books of the Bible',
                'Learn the story, structure, and meaning behind Scripture.',
                images[index % images.length]
              )
            }
          />

          <View className="h-10" />

          {/* Section 3 */}
          <Text className="text-xl md:text-2xl font-bold color-[#111827] mb-4">
            Daily Devotional
          </Text>
          <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => `daily-${item}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ index }) =>
              renderCard(
                'Daily Devotional',
                'Start your day with reflection and prayer.',
                images[index % images.length]
              )
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
