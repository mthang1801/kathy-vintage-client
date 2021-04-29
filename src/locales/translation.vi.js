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
        path : "/",
        icon : <AiOutlineHome/>,
        activeIcon : <AiFillHome/>
      },
      products : {
        id : "shop",
        name : "Shop",
        path : "/shop",
        icon : <AiOutlineShop/>,
        activeIcon : <AiFillShop/>
      },
      discountProducts : {
        id : "discount products",        
        name : "Khuyến mãi",
        path : "/discount-products",
        icon : <AiOutlinePercentage/>,
        activeIcon : <RiPercentFill/>
      },            
      recommendedProducts : {
        id : "recommended products",        
        name : "Đề xuất",
        path : "/recommended-products",
        icon : <RiVipDiamondLine/>,
        activeIcon : <RiVipDiamondFill/>
      },
      contact: {
        id : "contact",
        name : "Liên hệ", 
        path : "/contact",
        icon : <RiContactsLine/>,
        activeIcon : <RiContactsFill/>
      }, 
      setting: {
        id : "setting",
        name : "Cài đặt",
        path : "void(0)",
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
    shop : {
      portfolio : {
        title : "Danh mục SP"
      }      
    },
    bannerImages: [
      {
        id: "banner-1",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "banner-2",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "banner-3",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "banner-4",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "banner-5",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "banner-6",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "banner-7",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        id: "banner-8",
        linkUrl: "/",
        image: "https://images.pexels.com/photos/5738114/pexels-photo-5738114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
    ],
  }
}