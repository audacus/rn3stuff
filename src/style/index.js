import {StyleSheet, useColorScheme} from 'react-native';

export default function getStyleHelper() {
  const colorScheme = useColorScheme();

  const colors = {
    dark: {
      background: {
        string: '#222222',
        hex: 0x222222,
      },
      foreground: {
        string: '#dddddd',
        hex: 0xdddddd,
      },
    },
    light: {
      background: {
        string: '#dddddd',
        hex: 0xdddddd,
      },
      foreground: {
        string: '#222222',
        hex: 0x222222,
      }
    }
  }

  const getBackgroundColor = () => colors[colorScheme].background;

  const getForegroundColor = () => colors[colorScheme].foreground;

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
    styleSheet,
    getBackgroundColor,
    getForegroundColor,
  }
}
