
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type FABProps = {
  icon?: string;
  onPress?: () => void;
  bottom?: number;
};

export default function FAB({
  icon = 'message-outline',
  onPress,
  bottom = 24,
}: FABProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ bottom }}
      className="absolute right-5 w-14 h-14 rounded-full bg-[#00ADEF] justify-center items-center shadow-lg elevation-6"
      activeOpacity={0.85}
    >
      <Icon name={icon} size={28} color="#FFFFFF" />
    </TouchableOpacity>
  );
}
