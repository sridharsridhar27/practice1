import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';

export default function EditProfileScreen({ navigation }: any) {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [prefix, setPrefix] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');

  const [showPrefixOptions, setShowPrefixOptions] = useState(false);
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showMaritalOptions, setShowMaritalOptions] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#00AEEF" />

      <AppHeader
        title="Edit Profile"
        showBack
        showBell
        onBackPress={() => navigation.goBack()}
        onBellPress={() => {}}
      />

      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 140,
          paddingBottom: 60,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* PROFILE */}
        <View className="items-center mb-8">
          <View className="w-[110px] h-[110px] rounded-full bg-[#00AEEF] justify-center items-center relative">
            <Text className="text-white text-3xl font-bold">ME</Text>
            <View className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-[#00AEEF] justify-center items-center border-2 border-white">
              <Icon name="camera" size={16} color="#FFFFFF" />
            </View>
          </View>
          <Text className="mt-4 text-lg font-bold text-black">My Profile</Text>
        </View>

        {/* FORM */}
        <View className="w-full px-6 max-w-[500px]">
          {[
            { label: 'Prefix', type: 'prefix' },
            { label: 'First Name*', type: 'input', placeholder: 'Enter First Name' },
            { label: 'Nickname', type: 'input', placeholder: 'Enter Nickname' },
            { label: 'Middle Name', type: 'input', placeholder: 'Enter Middle Name' },
            { label: 'Last Name*', type: 'input', placeholder: 'Enter Last Name' },
            { label: 'Suffix', type: 'select', placeholder: 'Select Suffix' },
            { label: 'Gender', type: 'gender' },
            { label: 'Birthday', type: 'date', placeholder: 'Select Date' },
            { label: 'Marital Status', type: 'marital' },
            { label: 'Campus', type: 'select', value: 'Church-wide' },
          ].map((field, index) => (
            <View key={index} className="mb-4">
              <Text className="text-[13px] text-gray-500 font-bold mb-1.5 ml-3">
                {field.label.includes('*') ? (
                  <>
                    {field.label.replace('*', '')}
                    <Text className="text-rose-600">*</Text>
                  </>
                ) : field.label}
              </Text>

              <View className="h-12 rounded-full border border-gray-300 bg-white px-5 flex-row items-center justify-between">
                {/* INPUT */}
                {field.type === 'input' ? (
                  <TextInput
                    className="flex-1 text-[15px] text-black h-full"
                    placeholder={field.placeholder}
                    placeholderTextColor="#B0B0B0"
                  />

                /* PREFIX DROPDOWN */
                ) : field.type === 'prefix' ? (
                  <View className="flex-1">
                    <TouchableOpacity
                      className="flex-row justify-between items-center h-full"
                      onPress={() => setShowPrefixOptions(!showPrefixOptions)}
                    >
                      <Text className={`text-[15px] ${prefix ? 'text-black' : 'text-gray-400'}`}>
                        {prefix || 'Select Prefix'}
                      </Text>
                      <Icon name="chevron-down" size={20} color="#9CA3AF" />
                    </TouchableOpacity>

                    {showPrefixOptions && (
                      <View className="absolute top-12 left-0 right-0 bg-white border border-gray-300 rounded-xl z-50">
                        {['Mr', 'Mrs'].map(item => (
                          <TouchableOpacity
                            key={item}
                            className="p-3"
                            onPress={() => {
                              setPrefix(item);
                              setShowPrefixOptions(false);
                            }}
                          >
                            <Text className="text-black">{item}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>

                /* GENDER DROPDOWN */
                ) : field.type === 'gender' ? (
                  <View className="flex-1">
                    <TouchableOpacity
                      className="flex-row justify-between items-center h-full"
                      onPress={() => setShowGenderOptions(!showGenderOptions)}
                    >
                      <Text className={`text-[15px] ${gender ? 'text-black' : 'text-gray-400'}`}>
                        {gender || 'Select Gender'}
                      </Text>
                      <Icon name="chevron-down" size={20} color="#9CA3AF" />
                    </TouchableOpacity>

                    {showGenderOptions && (
                      <View className="absolute top-12 left-0 right-0 bg-white border border-gray-300 rounded-xl z-50">
                        {['Male', 'Female', 'Other'].map(item => (
                          <TouchableOpacity
                            key={item}
                            className="p-3"
                            onPress={() => {
                              setGender(item);
                              setShowGenderOptions(false);
                            }}
                          >
                            <Text className="text-black">{item}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>

                /* MARITAL STATUS DROPDOWN */
                ) : field.type === 'marital' ? (
                  <View className="flex-1">
                    <TouchableOpacity
                      className="flex-row justify-between items-center h-full"
                      onPress={() => setShowMaritalOptions(!showMaritalOptions)}
                    >
                      <Text className={`text-[15px] ${maritalStatus ? 'text-black' : 'text-gray-400'}`}>
                        {maritalStatus || 'Select Marital Status'}
                      </Text>
                      <Icon name="chevron-down" size={20} color="#9CA3AF" />
                    </TouchableOpacity>

                    {showMaritalOptions && (
                      <View className="absolute top-12 left-0 right-0 bg-white border border-gray-300 rounded-xl z-50">
                        {['Single', 'Married'].map(item => (
                          <TouchableOpacity
                            key={item}
                            className="p-3"
                            onPress={() => {
                              setMaritalStatus(item);
                              setShowMaritalOptions(false);
                            }}
                          >
                            <Text className="text-black">{item}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  </View>

                ) : (
                  <>
                    <Text className={`text-[15px] ${field.value ? 'text-black' : 'text-gray-400'}`}>
                      {field.value || field.placeholder}
                    </Text>
                    <Icon
                      name={field.type === 'date' ? 'calendar-outline' : 'chevron-down'}
                      size={20}
                      color="#9CA3AF"
                    />
                  </>
                )}
              </View>
            </View>
          ))}

          {/* EMAIL */}
          <Text className="text-[13px] text-gray-500 font-bold mb-1.5 ml-3">
            Email Address
          </Text>
          <View className="h-12 rounded-full border border-gray-300 bg-white px-5 flex-row items-center mb-4">
            <TextInput
              className="flex-1 text-[15px] text-black h-full"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter Email Address"
              placeholderTextColor="#B0B0B0"
            />
            <Icon name="pencil-outline" size={18} color="#888888" />
          </View>

          {/* PHONE */}
          <Text className="text-[13px] text-gray-500 font-bold mb-1.5 ml-3">
            Mobile Phone
          </Text>
          <View className="h-12 rounded-full border border-gray-300 bg-white px-5 flex-row items-center mb-6">
            <TextInput
              className="flex-1 text-[15px] text-black h-full"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              placeholder="Enter Mobile Number"
              placeholderTextColor="#B0B0B0"
            />
            <Icon name="pencil-outline" size={18} color="#888888" />
          </View>

          {/* BUTTONS */}
          <View className="flex-row space-x-3 mt-4">
            <TouchableOpacity className="flex-1 bg-[#00AEEF] rounded-full py-3.5 items-center">
              <Text className="text-white font-bold text-sm">SAVE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 bg-[#00AEEF] rounded-full py-3.5 items-center"
              onPress={() => navigation.goBack()}
            >
              <Text className="text-white font-bold text-sm">CANCEL</Text>
            </TouchableOpacity>
          </View>

          {/* FOOTER */}
          <View className="mt-8 items-center">
            <Text className="text-center text-[13px] text-gray-500">
              Having trouble changing your profile information? Email us at:
            </Text>
            <Text className="text-center text-[13px] font-bold text-[#00AEEF] mt-1.5">
              appfeedback@xyz.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
