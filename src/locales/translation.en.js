import React from "react"
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePercentage,
  AiFillShop,
  AiOutlineShop,
  AiOutlineInstagram,
} from "react-icons/ai"
import {
  RiPercentFill,
  RiVipDiamondFill,
  RiVipDiamondLine,
  RiContactsFill,
  RiContactsLine,
  RiBillLine,
  RiShirtLine,
  RiShirtFill
} from "react-icons/ri"
import {
  IoIosSettings,
  IoMdSettings,    
  IoIosGlasses,
} from "react-icons/io"
import { FiTwitter, FiFacebook, FiLogOut } from "react-icons/fi"
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi"
import {BsBagFill, BsBag, BsArrowRepeat} from "react-icons/bs"
import {BiGlasses} from "react-icons/bi"

export const en = {
  translation: {
    auth: {
      login: "login",
      register: "sign up",
      signInGoogle : "Sign in with Google",
      signInFacebook : "Sign in with Facebook",      
      signInApple : "Sign in with Apple",
      signupForm : {
        title: "Sign Up",
        subTitle:  "Sign up your account via email and password.",
        button : "Sign up",
        name : "Name",
        email : "Email",
        gender:  "Gender", 
        password : "Password",
        confirmPassword : "Confirm Password",
        requiredAndInvalidName : "This field is required, Invalid, at least 3 characters, Invalid, at most 50 characters",
        invalidName : "Invalid, at least 3 characters, Invalid, at most 50 characters",
        invalidEmail : "Email is invalid",
        requiredAndInvalidEmail : "This field is required, Email is invalid",
        invalidPassword: "Invalid, at least 8 characters with a mix of letters, numbers & symbols",
        requiredAndInvalidPassword : (minLength) => `This field is required, Invalid, at least ${minLength} characters with a mix of letters, numbers & symbols`,        
        confirmPasswordNotMatch : "Password and confirm Password do not match",
        requiredError : "This field is required",
        invalidMinLength : (minLength) => `at least ${minLength} characters`,
        invalidMaxLength : maxLength => `at most ${maxLength} characters`,  
        footer : {
          haveAccount : {
            title: "You have account?",
            pathName : "Signin Account",
            path : "/auth"
          },
          forgotPassword : {
            title: "Forgot password?",
            pathName:  "Restore account",
            path : "/auth/restore-account"
          }
        }      
      },
      loginForm : {
        title: "Sign In",
        subTitle : "Sign in account via email and password",
        requireEmailAndPassword : "Email and Password are require",
        button : "Sign in",
        footer: {
          dontHaveAccount : {
            title : "Don't have account?" , 
            pathName : "Sign up account",
            path : "/auth/signup"
          } ,
          forgotPassword : {
            title: "Forgot password?",
            pathName:  "Restore account",
            path : "/auth/restore-account"
          }
        }
      },
      restoreAccountForm : {
        title : "Restore Account",
        subTitle : "Enter your email and check new password at Email address",
        restoreButton : "Restore",
        restoreSuccessText : "Your request to restore account successfully, please check your email to activate new password"
      }
    },
    user: {
      settingAccount : {
        name : "Setting your account",
        icon : <IoIosSettings/>,
        path : "/user/setting-account"
      },
      orderedHistory : {
        name : "Ordered History", 
        icon : <RiBillLine/>,
        path : `/user/ordered-history`
      },
      signout: {
        name : "Sign out",
        icon : <FiLogOut/>,        
      }
    }, 
    portfolioIcons: {
      portfolioId_1 : {
        contentful_id: "3baS7MxSRZpYZ2fzItxVur",        
        icon: <BsBag />,
        activeIcon: <BsBagFill />,
      },
      portfolioId_2 : {
        contentful_id: "4yTnyIDJGdpMuzPJgY7QCA",        
        icon:<BiGlasses />,
        activeIcon: <IoIosGlasses />,
      },
      portfolioId_3 : {
        contentful_id: "3f72lftmOXB4lPRTZJfI73",        
        icon:<GiConverseShoe />,
        activeIcon: <GiRunningShoe />,
      },
      portfolioId_4 :{
        contentful_id: "3pidDuLDjGd8D5oFc8AiE7",        
        icon:<RiShirtLine />,
        activeIcon: <RiShirtFill />,
      },
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
      light : "Light",
      dark : "Dark"
    },
    shop : {
      portfolio : {
        title : "Portfolio"
      }      
    },    
    page : {
      home: {
        categoryCarouselTitle: "Products Category",        
      }
    },
    product : {
      newProducts : {
        styledTitle : "Top",
        title :"New Products", 
        path : "/new-products",
        pathIcon : <BsArrowRepeat/>
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
        title : "Licenses Policy",
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
        title : "Contact",
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
    },
    others : {
      seeAll : "See All"
    }
  },
  
}
