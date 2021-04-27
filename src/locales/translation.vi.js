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
        id : "home",
        name : "Trang chủ", 
        icon : <AiOutlineHome/>,
        activeIcon : <AiFillHome/>
      },
      products : {
        id : "shop",
        name : "Shop",
        icon : <AiOutlineShop/>,
        activeIcon : <AiFillShop/>
      },
      discountProducts : {
        id : "discount products",
        name : "Khuyến mãi",
        icon : <AiOutlinePercentage/>,
        activeIcon : <RiPercentFill/>
      },            
      recommendedProducts : {
        id : "recommended products",
        name : "Đề xuất",
        icon : <RiVipDiamondLine/>,
        activeIcon : <RiVipDiamondFill/>
      },
      contact: {
        id : "contact",
        name : "Liên hệ", 
        icon : <RiContactsLine/>,
        activeIcon : <RiContactsFill/>
      }, 
      setting: {
        id : "setting",
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
    },
    setting : {
      title : "Cài đặt",
      contents : {
        locales : "Ngôn ngữ",
        mode : "Chế độ Màn hình"
      },
      close : "Đóng"
    },
    colorMode : {
      default : "Sáng",
      light : "Sáng",
      dark : "Tối"
    },
  }
}