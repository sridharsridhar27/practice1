import * as Keychain from 'react-native-keychain';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const saveTokens = async (
  accessToken: string,
  refreshToken: string,
) => {
  const value: Tokens = { accessToken, refreshToken };

  await Keychain.setGenericPassword(
    'auth',
    JSON.stringify(value),
    {
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
    },
  );
};

export const getTokens = async (): Promise<Tokens | null> => {
  const credentials = await Keychain.getGenericPassword();
  if (!credentials) return null;

  return JSON.parse(credentials.password);
};

export const clearTokens = async () => {
  await Keychain.resetGenericPassword();
};
