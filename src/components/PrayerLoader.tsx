import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

export default function PrayerLoader() {
  const translateX = useRef(new Animated.Value(-40)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 40,
          duration: 1200,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -40,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View className="absolute inset-0 justify-center items-center bg-white z-20">
      {/* Message */}
      <Text className="text-[#111827] text-base font-semibold mb-4">
        Loading...
      </Text>

      {/* Animated underline */}
      <View className="w-24 h-[2px] bg-gray-200 overflow-hidden rounded-full">
        <Animated.View
          style={{
            transform: [{ translateX }],
          }}
          className="w-10 h-full bg-[#00ADEF] rounded-full"
        />
      </View>
    </View>
  );
}
