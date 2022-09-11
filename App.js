import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Main from "./src/views/Main";
import Three from "./src/views/Three";

import getLanguageHelper from "./src/language";
import {StatusBar} from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {

  const i18n = getLanguageHelper().i18n;

  return (
    <NavigationContainer>
      <StatusBar/>

      <Stack.Navigator>

        <Stack.Screen
          name='main'
          component={Main}
          options={{title: i18n.t('title.home')}}
        />

        <Stack.Screen
          name='three_js'
          component={Three}
          options={{title: i18n.t('title.three_js')}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
