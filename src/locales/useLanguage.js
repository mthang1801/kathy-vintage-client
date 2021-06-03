import {useTranslation} from "react-i18next";
import {getLanguage} from "../../locales"
const useLanguage = () => {
  const {i18n, t, ready} = useTranslation();
  const lang =  i18n.language || getLanguage();
  const translation = i18n.store.data[lang];  
  return {lang, i18n, t, translation, ready}
}

export default useLanguage;
