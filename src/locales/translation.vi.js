import React from "react";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePercentage,
  AiFillShop,
  AiOutlineShop,
  AiOutlineInstagram
} from "react-icons/ai"
import {
  RiPercentFill,
  RiVipDiamondFill,
  RiVipDiamondLine,
  RiContactsFill,
  RiContactsLine,
} from "react-icons/ri"
import {IoIosSettings, IoMdSettings} from "react-icons/io"

import { FiTwitter,FiFacebook} from "react-icons/fi"
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
    page : {
      home: {
        categoryCarouselTitle : "Các loại Sản phẩm"
      }
    },
    footer: {
      about : {
        title: "Về TN Shop",
        companyName : "Công ty TNHH TN Việt Nam",
        registerDate : "Ngày ĐK: 30/04/2021",
        taxCode : "Mã số thuế: 0123456789",
        address : "Địa chỉ: 123A Quang Trung P10 Q. Gò Vấp",
        businessCode : "Số ĐKKD: 4391FCS192",
        bisinessDateAward : "Ngày cấp: 30/04/2021",
        awardAt : "Phòng đăng ký kinh doanh Sở Kế Hoạch Đầu Tư TPHCM",
        hotline: "Hotline: 0123456789",   
        otherBrandsTitle : " Hệ thống chi nhánh cửa hàng của TN Shop",
        otherBrands : ["Chi nhánh 1: 784 Nguyễn Văn A Q.12 TPHCM", "Chi nhánh 2: 213 Nguyễn Văn B Q.Bình Thạnh TPHCM"]
      },
      licensesPolicy : {
        title : "Chính sách hỗ trợ",
        listPolicies : {
          payment : {
            name : "Thanh toán",
            path : "/liscense/payment"
          },
          forwarding : {
            name : "Chính sách giao nhận",
            path : "/liscense/forwarding"
          },
          warrantyReturn : {
            name : "Đổi trả - Bảo hành",
            path : "/liscense/warranty-return"
          },  
          privacy : {
            name : "Chính sách bảo mật",
            path : "/liscense/privacy-policy"
          }
        }
      },
      contact : {
        title : "Liên hệ",
        listContacts : [
          {
            name : "facebook", 
            path : "fb.com",
            icon : <FiFacebook/>
          },
          {
            name : "twitter", 
            path : "twitter.com",
            icon : <FiTwitter/>
          },
          {
            name : "instagram",
            path : "instagram.com",
            icon : <AiOutlineInstagram/>
          }
        ]      
      }
    }
  }
}