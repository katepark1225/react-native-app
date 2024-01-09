import * as RNLocalize from 'react-native-localize'

export const systemLang = () => {
  return RNLocalize.getLocales()[0]['languageCode']
}
