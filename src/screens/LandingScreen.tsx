import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function LandingScreen({ navigation }: any) {
  const [loading, setLoading] = useState(false);

  return (

    <View className="flex-1 bg-[#00ADEF]">
      <View className="flex-1 justify-center items-center px-6 -mt-10">
        <Text className="text-3xl md:text-4xl font-bold color-white mb-7 text-center">
          Welcome back!
        </Text>

        <Text className="text-base md:text-lg text-white text-center leading-6 mb-10">
          Type in your phone number{"\n"}
          or email to continue
        </Text>

        <TextInput
          placeholder="Enter phone number or email"
          placeholderTextColor="#6B7280"
          className="bg-white rounded-full py-4 px-6 text-base color-[#111827] w-full max-w-[300px] mb-9"
        />

        <TouchableOpacity
          className="border-[1.5px] border-white rounded-full py-3 px-8 min-w-[140px] items-center"
          disabled={loading}
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigation.navigate('OtpLogin');
            }, 1200);
          }}
        >
          <View className="h-5 justify-center">
            {loading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text className="color-white text-base font-semibold">
                Sign In
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}