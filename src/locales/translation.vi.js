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
import {BsBagFill, BsBag} from "react-icons/bs"
import {BiGlasses} from "react-icons/bi"

export const vi = {
  translation: {
    auth: {
      login: "Đăng nhập",
      register: "Đăng ký",
      signInGoogle: "Đăng nhập Google",
      signInFacebook: "Đăng nhập Facebook",
      signInApple: "Đăng nhập Apple",
      signupForm: {
        title: "Đăng ký tài khoản",
        subTitle: "Đăng ký tài khoản bằng email và password",
        button: "Đăng ký",
        name: "Tên",
        email: "Địa chỉ Email",
        gender: "Giới tính",
        password: "Mật khẩu",
        confirmPassword: "Xác nhận mật khẩu",
        requiredAndInvalidName:
          "Trường này là bắt buộc, tên người dùng có ít nhất 3 ký tự và dài nhất là 50 ký tự.",
        invalidName:
          "Tên không hợp lệ, tên người dùng có ít nhất 3 ký tự và dài nhất là 50 ký tự. ",
        invalidEmail: "Email không hợp lệ",
        requiredAndInvalidEmail: "Trường này là bắt buộc",
        invalidPassword:
          "Mật khẩu không hợp lệ, phải có ít nhất 8 ký tự bao gồm ký tự thường, ký tự in hoa, số và ký tự đặc biệt",
        requiredAndInvalidPassword:
          "Trường này là bắt buộc, phải có ít nhất 8 ký tự bao gồm ký tự thường, ký tự in hoa, số và ký tự đặc biệt",
        invalidConfirmPassword:
          "Mật khẩu xác nhận là bắt buộc và phải khớp với mật khẩu trên",
        confirmPasswordNotMatch:
          "Mật khẩu xác nhận và mật khẩu trên không trùng khớp",
        requiredError: "Trường này là bắt buộc",
        requiredAndInvalidPassword: minLength =>
          `This field is required, Invalid, at least ${minLength} characters with a mix of letters, numbers & symbols`,
        invalidMinLength: minLength => `Phải có ít nhất ${minLength} ký tự`,
        invalidMaxLength: maxLength => `không vượt quá ${maxLength} ký tự`,
        footer: {
          haveAccount: {
            title: "Đã có tài khoản",
            pathName: "Đăng nhập",
            path: "/auth",
          },
          forgotPassword: {
            title: "Quên mật khẩu?",
            pathName: "Khôi phục mật khẩu",
            path: "/auth/restore-account",
          },
        },
      },
      loginForm: {
        title: "Đăng nhập",
        subTitle: "Đăng nhập tài khoản bằng email và mật khẩu",
        requireEmailAndPassword: "Email và Password là bắt buộc",
        button: "Đăng nhập",
        footer: {
          dontHaveAccount: {
            title: "Chưa có tài khoản?",
            pathName: "Đăng ký tài khoản",
            path: "/auth/signup",
          },
          forgotPassword: {
            title: "Quên mật khẩu?",
            pathName: "Khôi phục mật khẩu",
            path: "/auth/restore-account",
          },
        },
      },
      restoreAccountForm: {
        title: "Khôi phục tài khoản",
        subTitle: "Nhập địa chỉ email và xác nhận mật khẩu email gửi về",
        restoreButton: "Khôi phục",
        restoreSuccessText:
          "Yêu cầu khôi phục tài khoản thành công, vui lòng kiểm tra email để kích hoạt lại mật khẩu",
      },
    },
    user: {
      settingAccount: {
        name: "Thiết lập tài khoản",
        icon: <IoIosSettings />,
        path: "/user/setting-account",
      },
      orderedHistory: {
        name: "Lịch sử đặt hàng",
        icon: <RiBillLine />,
        path: `/user/ordered-history`,
      },
      signout: {
        name: "Đăng xuất",
        icon: <FiLogOut />,
      },
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
        id: "home",
        name: "Trang chủ",
        path: "/",
        icon:<AiOutlineHome />,
        activeIcon: <AiFillHome />,
      },
      products: {
        id: "shop",
        name: "Shop",
        path: "/shop",
        icon: <AiOutlineShop />,
        activeIcon: <AiFillShop />,
      },
      discountProducts: {
        id: "discount products",
        name: "Khuyến mãi",
        path: "/discount-products",
        icon: <AiOutlinePercentage />,
        activeIcon: <RiPercentFill />,
      },
      recommendedProducts: {
        id: "recommended products",
        name: "Đề xuất",
        path: "/recommended-products",
        icon: <RiVipDiamondLine />,
        activeIcon: <RiVipDiamondFill />,
      },
      contact: {
        id: "contact",
        name: "Liên hệ",
        path: "/contact",
        icon: <RiContactsLine />,
        activeIcon: <RiContactsFill />,
      },
      setting: {
        id: "setting",
        name: "Cài đặt",
        path: "void(0)",
        icon: <IoIosSettings />,
        activeIcon: <IoMdSettings />,
      },
    },
    cart: {
      name: "Giỏ hàng",
    },
    search: {
      placeholder: "Tìm kiếm...",
    },
    setting: {
      title: "Cài đặt",
      contents: {
        locales: "Ngôn ngữ",
        mode: "Chế độ Màn hình",
      },
      close: "Đóng",
    },
    colorMode: {
      light: "Sáng",
      dark: "Tối",
    },
    shop: {
      portfolio: {
        title: "Danh mục SP",
      },
    },
    page: {
      home: {
        categoryCarouselTitle: "Các loại Sản phẩm",
      },
    },
    footer: {
      about: {
        title: "Về TN Shop",
        companyName: "Công ty TNHH TN Việt Nam",
        registerDate: "Ngày ĐK: 30/04/2021",
        taxCode: "Mã số thuế: 0123456789",
        address: "Địa chỉ: 123A Quang Trung P10 Q. Gò Vấp",
        businessCode: "Số ĐKKD: 4391FCS192",
        bisinessDateAward: "Ngày cấp: 30/04/2021",
        awardAt: "Phòng đăng ký kinh doanh Sở Kế Hoạch Đầu Tư TPHCM",
        hotline: "Hotline: 0123456789",
        otherBrandsTitle: " Hệ thống chi nhánh cửa hàng của TN Shop",
        otherBrands: [
          "Chi nhánh 1: 784 Nguyễn Văn A Q.12 TPHCM",
          "Chi nhánh 2: 213 Nguyễn Văn B Q.Bình Thạnh TPHCM",
        ],
      },
      licensesPolicy: {
        title: "Chính sách hỗ trợ",
        listPolicies: {
          payment: {
            name: "Thanh toán",
            path: "/liscense/payment",
          },
          forwarding: {
            name: "Chính sách giao nhận",
            path: "/liscense/forwarding",
          },
          warrantyReturn: {
            name: "Đổi trả - Bảo hành",
            path: "/liscense/warranty-return",
          },
          privacy: {
            name: "Chính sách bảo mật",
            path: "/liscense/privacy-policy",
          },
        },
      },
      contact: {
        title: "Liên hệ",
        listContacts: [
          {
            name: "facebook",
            path: "fb.com",
            icon: <FiFacebook />,
          },
          {
            name: "twitter",
            path: "twitter.com",
            icon: <FiTwitter />,
          },
          {
            name: "instagram",
            path: "instagram.com",
            icon: <AiOutlineInstagram />,
          },
        ],
      },
    },
  },
}
