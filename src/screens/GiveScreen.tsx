import BaseWebViewScreen from '../components/BaseWebViewScreen';

export default function GiveScreen({ navigation }: any) {
  return (
    <BaseWebViewScreen
      navigation={navigation}
      title="Give"
      url="https://pushpay.com/g/calvaryftl"
      trustedDomain="pushpay.com"
    />
  );
}
