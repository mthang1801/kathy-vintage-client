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
        icon: <AiOutlineHome />,
        activeIcon: <AiFillHome />,
      },
      products: {
        id : "shop",
        name: "Shop",
        icon: <AiOutlineShop />,
        activeIcon: <AiFillShop />,
      },
      discountProducts: {
        id : "discount products",
        name: "Discount Products",
        icon: <AiOutlinePercentage />,
        activeIcon: <RiPercentFill />,
      },
      recommendedProducts: {
        id : "recommended products",
        name: "Recommended Products",
        icon: <RiVipDiamondLine />,
        activeIcon: <RiVipDiamondFill />,
      },
      contact: {
        id : "contact",
        name: "Contact",
        icon: <RiContactsLine />,
        activeIcon: <RiContactsFill />,
      },
      setting: {
        id : "setting",
        name: "Setting",
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
    }
  },
  
}
