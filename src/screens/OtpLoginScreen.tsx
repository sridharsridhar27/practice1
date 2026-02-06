import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OtpLoginScreen({ navigation }: any) {
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [signInLoading, setSignInLoading] = useState(false);

  return (
    <View className="flex-1 bg-[#00ADEF]">
      {/* -------------------- BACK BUTTON -------------------- */}
      {/* Used absolute positioning with safe top margin */}
      <TouchableOpacity
        className="absolute top-14 left-5 z-10"
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={26} color="#FFFFFF" />
      </TouchableOpacity>

      {/* -------------------- MAIN CONTENT -------------------- */}
      <View className="flex-1 px-6 justify-center items-center">
        {/* Heading: Responsive text sizes */}
        <Text className="text-2xl md:text-3xl font-bold color-white text-center mb-4">
          Enter the code sent{"\n"}to your email
        </Text>

        {/* Subtext */}
        <Text className="text-sm md:text-base color-white text-center mb-8 leading-5">
          A 6-digit code has been sent{"\n"}
          <Text className="font-semibold color-white">to mk065005@gmail.com</Text>
        </Text>

        {/* OTP Inputs: 'space-x-2' ensures even gaps between boxes */}
        <View className="flex-row justify-between w-full max-w-[300px] mb-9">
          {Array.from({ length: 6 }).map((_, index) => (
            <TextInput
              key={index}
              maxLength={1}
              keyboardType="number-pad"
              className="w-11 h-11 border-[1.5px] border-white rounded-lg text-center text-lg color-white font-bold"
            />
          ))}
        </View>

        {/* Primary Button: Solid background */}
        <TouchableOpacity
          className="bg-white rounded-full py-3 px-8 items-center mb-7 w-full max-w-[200px]"
          disabled={signInLoading}
          onPress={() => {
            setSignInLoading(true);
            setTimeout(() => {
              setSignInLoading(false);
              navigation.navigate('Dashboard');
            }, 1500);
          }}
        >
          <View className="h-5 justify-center">
            {signInLoading ? (
              <ActivityIndicator color="#00B2FF" />
            ) : (
              <Text className="color-[#00B2FF] text-base font-bold">SIGN IN</Text>
            )}
          </View>
        </TouchableOpacity>

        {/* OR Divider */}
        <View className="flex-row items-center mb-6">
          <View className="w-16 h-[1px] bg-white/60" />
          <Text className="mx-3 color-white font-semibold">OR</Text>
          <View className="w-16 h-[1px] bg-white/60" />
        </View>

        {/* Secondary Button: Outlined */}
        <TouchableOpacity
          className="border-[1.5px] border-white rounded-full py-3 px-6 items-center w-full max-w-[250px]"
          disabled={passwordLoading}
          onPress={() => {
            setPasswordLoading(true);
            setTimeout(() => {
              setPasswordLoading(false);
              navigation.navigate('PasswordLogin');
            }, 1200);
          }}
        >
          <View className="h-[18px] justify-center">
            {passwordLoading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text className="color-white text-sm font-semibold tracking-wider">
                SIGN IN WITH PASSWORD
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}