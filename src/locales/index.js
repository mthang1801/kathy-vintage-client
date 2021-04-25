import {en} from "./translation.en"
import {vi} from "./translation.vi";

export const  listLanguages = ["en","vi"]
export const setLanguage = (lng) => typeof window !== undefined ? window.localStorage.setItem("tnshop-locale",lng) : null

export const getLanguage = () => {
  if(typeof window!== "undefined"){
    const lang = window.localStorage.getItem("tnshop-locale");
    if(!listLanguages.includes(lang)){
      return "vi";
    }
    return lang;
  }
  return null
}

export default {
  en, 
  vi
}