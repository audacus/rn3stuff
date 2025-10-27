import {I18n} from "i18n-js";
import translations from "./translations";
import * as Localization from "expo-localization";
import {useState} from "react";

export default function getLanguageHelper() {
  // locale
  const [locale] = useState(Localization.locale);

  // i18n
  const i18n = new I18n(translations);
  i18n.enableFallback = true;
  i18n.defaultLocale = 'en';
  i18n.locale = locale;

  return {
    locale,
    i18n,
  }
}
