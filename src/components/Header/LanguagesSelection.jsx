import React, { useEffect, useState , useRef} from "react";
import ReactCountryFlag from "react-country-flag";
import {
  Wrapper,
  Text,
  LanguageDropdownContainer,
  RowInline
} from "./styles/LanguagesSelection.styles";
import {setLanguage} from "../../locales"
import useLanguage from "../Global/useLanguage";
import {useThemeUI} from "theme-ui"
const configLang = {
  en: { key: "en", text: "English", code: "US" },
  vi: { key: "vi", text: "Tiếng Việt", code: "VN" },  
};

const ToggleLanguage = () => {  
  const [showLangBoard, setShowLangBoard] = useState(false);
  const langRef = useRef(null);
  const {i18n, lang} = useLanguage();
  const {colorMode,theme} = useThemeUI()
  const listCountriesCode = Object.keys(configLang).filter(
    (key) => key !== lang
  );
    
  useEffect(() => {
    function trackLangsBoard(e){
      if(langRef && langRef.current.contains(e.target)){      
        setShowLangBoard(true);
      }else{
        setShowLangBoard(false);
      }
    }
    document.addEventListener("mouseover", trackLangsBoard);
    return () => document.removeEventListener("mouseover", trackLangsBoard);
  },[])
  const onChangeLocale = (key) => {
    i18n.changeLanguage(key);
    setLanguage(key);
  }
  if(!lang) return null ; 
  return (
    <Wrapper ref={langRef}>
      <ReactCountryFlag
        countryCode={configLang[lang].code}
        svg
        style={{ transform: "scale(1.5)", marginRight: "1rem" }}
      />
      <Text>{configLang[lang].text}</Text>
      <LanguageDropdownContainer show={showLangBoard} theme={theme.colors[colorMode]}>
        {listCountriesCode.map((key) => (
          <RowInline key={key} onClick={() => onChangeLocale(key)} theme={theme.colors[colorMode]}>
            <ReactCountryFlag
              countryCode={configLang[key].code}
              svg
              style={{ transform: "scale(1.5)", marginRight: "1rem" }}
            />
            <Text>{configLang[key].text}</Text>
          </RowInline>
        ))}
      </LanguageDropdownContainer>
    </Wrapper>
  );
};

export default ToggleLanguage;