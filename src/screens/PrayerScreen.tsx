import BaseWebViewScreen from '../components/BaseWebViewScreen';

export default function PrayerScreen({ navigation }: any) {
  return (
    <BaseWebViewScreen
      navigation={navigation}
      title="Prayer"
      url="https://clicktopray.org/"
      trustedDomain="clicktopray.org"
    />
  );
}
