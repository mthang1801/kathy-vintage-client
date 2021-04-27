import React from "react";
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
import {IoIosSettings, IoMdSettings} from "react-icons/io"
export const vi = {
  translation : {
    auth : {
      login : "Đăng nhập",
      register : "Đăng ký"
    } ,
    navigations: {
      home: {
        name : "Trang chủ", 
        icon : <AiOutlineHome/>,
        activeIcon : <AiFillHome/>
      },
      products : {
        name : "Shop",
        icon : <AiOutlineShop/>,
        activeIcon : <AiFillShop/>
      },
      discountProducts : {
        name : "Khuyến mãi",
        icon : <AiOutlinePercentage/>,
        activeIcon : <RiPercentFill/>
      },            
      recommendedProducts : {
        name : "Đề xuất",
        icon : <RiVipDiamondLine/>,
        activeIcon : <RiVipDiamondFill/>
      },
      contact: {
        name : "Liên hệ", 
        icon : <RiContactsLine/>,
        activeIcon : <RiContactsFill/>
      }, 
      setting: {
        name : "Cài đặt",
        icon : <IoIosSettings/>,
        activeIcon : <IoMdSettings/>
      }         
    },
    cart : {
      name : "Giỏ hàng"
    },
    search : {
      placeholder : "Tìm kiếm..."
    }
  }
}