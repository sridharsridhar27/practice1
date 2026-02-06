import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  Linking,
} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PrayerLoader from '../components/PrayerLoader';

type Props = {
  navigation: any;
  title: string;
  url: string;
  trustedDomain: string;
};

export default function BaseWebViewScreen({
  navigation,
  title,
  url,
  trustedDomain,
}: Props) {
  const webViewRef = useRef<WebView>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);

  /*  ANDROID BACK HANDLING */
  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack) {
        webViewRef.current?.goBack();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );

    return () => subscription.remove();
  }, [canGoBack]);

  /*  LINK HANDLING */
  const handleNavigationRequest = (request: any) => {
    const { url } = request;

    // Allow trusted domain
    if (url.includes(trustedDomain)) return true;

    // Internal deep links
    if (url.startsWith('myapp://')) {
      if (url.includes('events')) navigation.navigate('Events');
      if (url.includes('groups')) navigation.navigate('Groups');
      return false;
    }

    // External links
    Linking.openURL(url);
    return false;
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#00ADEF" />

      {/* HEADER */}
      <View className="h-[110px] bg-[#00ADEF] rounded-b-[24px] justify-center items-center">
        <TouchableOpacity
          className="absolute left-5 top-12"
          onPress={() =>
            canGoBack
              ? webViewRef.current?.goBack()
              : navigation.goBack()
          }
        >
          <Icon name="arrow-left" size={26} color="#FFFFFF" />
        </TouchableOpacity>

        <Text className="text-white text-lg font-bold">{title}</Text>

        <TouchableOpacity className="absolute right-5 top-12">
          <Icon name="bell-outline" size={26} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* WEBVIEW */}
      <View className="flex-1">
        <WebView
          ref={webViewRef}
          source={{ uri: url }}
          className="flex-1"
          onLoadStart={() => {
            setIsLoading(true);
            setHasError(false);
          }}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          onHttpError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          onNavigationStateChange={(navState) =>
            setCanGoBack(navState.canGoBack)
          }
          onShouldStartLoadWithRequest={handleNavigationRequest}
          originWhitelist={['https://*']}
          javaScriptEnabled
          domStorageEnabled
          mixedContentMode="never"
        />

        {isLoading && !hasError && <PrayerLoader />}

        {hasError && (
          <View className="absolute inset-0 justify-center items-center bg-white px-6 z-30">
            <Icon name="alert-circle-outline" size={40} color="#EF4444" />

            <Text className="mt-3 text-lg font-bold text-gray-900 text-center">
              Unable to load content
            </Text>

            <TouchableOpacity
              className="mt-5 bg-[#00ADEF] px-6 py-3 rounded-full"
              onPress={() => {
                setHasError(false);
                setIsLoading(true);
                webViewRef.current?.reload();
              }}
            >
              <Text className="text-white font-bold">RETRY</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
