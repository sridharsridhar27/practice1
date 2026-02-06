import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { loginUser } from '../api/authService';

export default function PasswordLoginScreen({ navigation }: any) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Validation error', 'Email and password are required');
      return;
    }

    try {
      setLoading(true);
      await loginUser(email, password);
      navigation.replace('Dashboard');
    } catch (e: any) {
      if (e.message === 'INVALID_CREDENTIALS') {
        Alert.alert('Login failed', 'Invalid email or password');
      } else if (e.message === 'REQUEST_TIMEOUT') {
        Alert.alert('Timeout', 'Server not responding. Try again.');
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <View className="flex-1 bg-[#00ADEF] justify-center">
      {/* Back Button */}
      <TouchableOpacity
        className="absolute top-14 left-5"
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={26} color="#fff" />
      </TouchableOpacity>

      <View className="px-6 items-center">
        {/* Logo + Brand */}
        <View className="items-center mb-8">
          <Image
            source={require('../assets/letter-v.png')}
            className="w-14 h-14 mb-2"
          />
          <Text className="color-white text-xl font-medium tracking-[2px]">
            <Text className="font-black">V</Text>ELOCORE
          </Text>
        </View>

        <Text className="text-2xl font-bold color-white mb-7">
          Welcome back!
        </Text>

        {/* Email */}
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#6B7280"
          className="bg-white rounded-full py-3.5 px-5 mb-4 w-[300px]"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        {/* Password */}
        <View className="flex-row items-center bg-white rounded-full px-5 mb-8 w-[300px]">
          <TextInput
            placeholder="Password"
            placeholderTextColor="#6B7280"
            secureTextEntry={!passwordVisible}
            className="flex-1 py-3.5"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Icon
              name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        </View>

        {/* Sign In */}
        <TouchableOpacity
          className="border-[1.5px] border-white rounded-full py-3.5 px-9"
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="color-white font-bold">SIGN IN</Text>
          )}
        </TouchableOpacity>

        <Text className="mt-5 color-white/70 text-[12px]">
          build number: 2.2.0
        </Text>
      </View>
    </View>
  );
}
