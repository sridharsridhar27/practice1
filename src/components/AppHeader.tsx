import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type AppHeaderProps = {
  title: string;
  showBack?: boolean;
  showBell?: boolean;
  onBackPress?: () => void;
  onBellPress?: () => void;
};

export default function AppHeader({
  title,
  showBack = false,
  showBell = false,
  onBackPress,
  onBellPress,
}: AppHeaderProps) {
  return (
    <View className="absolute top-0 left-0 right-0 h-[130px] md:h-[150px] bg-[#00ADEF] rounded-b-[28px] justify-center items-center z-10 shadow-lg">
      {showBack && (
        <TouchableOpacity
          className="absolute left-5 top-12 md:top-16"
          onPress={onBackPress}
        >
          <Icon name="arrow-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      )}

      <Text className="text-white text-xl md:text-3xl font-bold">
        {title}
      </Text>

      {showBell && (
        <TouchableOpacity
          className="absolute right-5 top-12 md:top-16"
          onPress={onBellPress}
        >
          <Icon name="bell-outline" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}
