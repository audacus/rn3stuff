import {StyleSheet, useColorScheme} from 'react-native';

export default function getStyleHelper() {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === 'dark'

  const colors = {
    dark: {
      string: '#222222',
      hex: 0x222222,
    },
    bright: {
      string: '#dddddd',
      hex: 0xdddddd,
    }
  }

  const getBackgroundColor = () => {
    return darkMode ? colors.dark : colors.bright;
  }

  const getForegroundColor = () => {
    return darkMode ? colors.bright : colors.dark;
  }

  const styleSheet = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: getBackgroundColor().string,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: getForegroundColor().string,
    }
  });

  return {
    colorScheme,
    darkMode,
    styleSheet,
    getBackgroundColor,
    getForegroundColor,
  }
}
