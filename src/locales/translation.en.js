import React from "react"
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePercentage,
  AiFillShop,
  AiOutlineShop,
} from "react-icons/ai"
import {
  RiPercentFill,
  RiVipDiamondFill,
  RiVipDiamondLine,
  RiContactsFill,
  RiContactsLine,
} from "react-icons/ri"
import { IoIosSettings, IoMdSettings } from "react-icons/io"

export const en = {
  translation: {
    auth: {
      login: "login",
      register: "sign up",
    },
    navigations: {
      home: {
        id : "home",
        name: "Home",
        path : "/",
        icon: <AiOutlineHome />,
        activeIcon: <AiFillHome />,
      },
      products: {
        id : "shop",
        name: "Shop",
        path : "/shop",
        icon: <AiOutlineShop />,
        activeIcon: <AiFillShop />,
      },
      discountProducts: {
        id : "discount products",
        name: "Discount Products",
        path: "/discount-products",
        icon: <AiOutlinePercentage />,
        activeIcon: <RiPercentFill />,
      },
      recommendedProducts: {
        id : "recommended products",
        name: "Recommended Products",
        path : "/recommended-products",
        icon: <RiVipDiamondLine />,
        activeIcon: <RiVipDiamondFill />,
      },
      contact: {
        id : "contact",
        name: "Contact",
        path :"/contact",
        icon: <RiContactsLine />,
        activeIcon: <RiContactsFill />,
      },
      setting: {
        id : "setting",
        name: "Setting",
        path : "void(0)",
        icon: <IoMdSettings />,
        activeIcon: <IoIosSettings />,
      },
    },
    cart: {
      name: "Cart",
    },
    search: {
      placeholder: "Search...",
    },
    setting : {
      title : "Setting",
      contents : {
        locales : "Locales",
        mode : "Color Mode"
      },
      close : "Close"
    },
    colorMode : {
      default : "Light",
      light : "Light",
      dark : "Dark"
    },
    shop : {
      portfolio : {
        title : "Portfolio"
      }      
    }
  },
  
}
