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
        name: "Home",
        icon: <AiOutlineHome />,
        activeIcon: <AiFillHome />,
      },
      products: {
        name: "Shop",
        icon: <AiOutlineShop />,
        activeIcon: <AiFillShop />,
      },
      discountProducts: {
        name: "Discount Products",
        icon: <AiOutlinePercentage />,
        activeIcon: <RiPercentFill />,
      },
      recommendedProducts: {
        name: "Recommended Products",
        icon: <RiVipDiamondLine />,
        activeIcon: <RiVipDiamondFill />,
      },
      contact: {
        name: "Contact",
        icon: <RiContactsLine />,
        activeIcon: <RiContactsFill />,
      },
      setting: {
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
  },
}
