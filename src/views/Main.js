import {Button, Text, View} from 'react-native';

import getStyleHelper from "../style";
import getLanguageHelper from "../language";

export default function Main({navigation}) {

  const styles = getStyleHelper().styleSheet;
  const i18n = getLanguageHelper().i18n;

  return (
    <View style={styles.container}>

      <Text style={styles.text}>colorScheme: {getStyleHelper().colorScheme}</Text>
      <Text style={styles.text}>locale: {getLanguageHelper().locale}</Text>
      <Text style={styles.text}>{i18n.t('welcome')}</Text>

      <Button
        title={i18n.t('button.three_js')}
        onPress={() => navigation.navigate('three_js')}
      />

    </View>
  );
}
