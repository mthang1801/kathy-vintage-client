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
  RiShirtFill,
} from "react-icons/ri"
import { IoIosSettings, IoMdSettings, IoIosGlasses } from "react-icons/io"
import { FiTwitter, FiFacebook, FiLogOut } from "react-icons/fi"
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi"
import { BsBagFill, BsBag, BsArrowRepeat } from "react-icons/bs"
import { BiGlasses, BiPurchaseTag } from "react-icons/bi"
import { MdAddShoppingCart } from "react-icons/md"
export const en = {
  translation: {
    auth: {
      login: "login",
      register: "sign up",
      signInGoogle: "Sign in with Google",
      signInFacebook: "Sign in with Facebook",
      signInApple: "Sign in with Apple",
      signupForm: {
        title: "Sign Up",
        subTitle: "Sign up your account via email and password.",
        button: "Sign up",
        name: "Name",
        email: "Email",
        gender: "Gender",
        password: "Password",
        confirmPassword: "Confirm Password",
        requiredAndInvalidName:
          "This field is required, Invalid, at least 3 characters, Invalid, at most 50 characters",
        invalidName:
          "Invalid, at least 3 characters, Invalid, at most 50 characters",
        invalidEmail: "Email is invalid",
        requiredAndInvalidEmail: "This field is required, Email is invalid",
        invalidPassword:
          "Invalid, at least 8 characters with a mix of letters, numbers & symbols",
        requiredAndInvalidPassword: minLength =>
          `This field is required, Invalid, at least ${minLength} characters with a mix of letters, numbers & symbols`,
        confirmPasswordNotMatch: "Password and confirm Password do not match",
        requiredError: "This field is required",
        invalidMinLength: minLength => `at least ${minLength} characters`,
        invalidMaxLength: maxLength => `at most ${maxLength} characters`,
        footer: {
          haveAccount: {
            title: "You have account?",
            pathName: "Signin Account",
            path: "/auth",
          },
          forgotPassword: {
            title: "Forgot password?",
            pathName: "Restore account",
            path: "/auth/restore-account",
          },
        },
      },
      loginForm: {
        title: "Sign In",
        subTitle: "Sign in account via email and password",
        requireEmailAndPassword: "Email and Password are require",
        button: "Sign in",
        footer: {
          dontHaveAccount: {
            title: "Don't have account?",
            pathName: "Sign up account",
            path: "/auth/signup",
          },
          forgotPassword: {
            title: "Forgot password?",
            pathName: "Restore account",
            path: "/auth/restore-account",
          },
        },
      },
      restoreAccountForm: {
        title: "Restore Account",
        subTitle: "Enter your email and check new password at Email address",
        restoreButton: "Restore",
        restoreSuccessText:
          "Your request to restore account successfully, please check your email to activate new password",
      },
    },
    user: {
      settingAccount: {
        name: "Setting your account",
        icon: <IoIosSettings />,
        path: "/user/setting-account",
      },
      orderedHistory: {
        name: "Ordered History",
        icon: <RiBillLine />,
        path: `/user/ordered-history`,
      },
      signout: {
        name: "Sign out",
        icon: <FiLogOut />,
      },
      information : {
        title : "Form Information",
        fullname : "Full Name",
        phone : "Phone Number",
        city : "Select City",
        district : "Select District",
        ward : "Select Ward",
        address : "Select Address",
        errorMessages : {
          required : "This field is required",
          fullName : "You need to type first name and last name",
          invalidPhone : "Invalid phone number"
        },
        buttonSubmit : "Complete",
        buttonUpdate : "Update",
        button_close_information_form : "Close"
      }
    },
    portfolioIcons: {
      portfolioId_1: {
        contentful_id: "3baS7MxSRZpYZ2fzItxVur",
        icon: <BsBag />,
        activeIcon: <BsBagFill />,
      },
      portfolioId_2: {
        contentful_id: "4yTnyIDJGdpMuzPJgY7QCA",
        icon: <BiGlasses />,
        activeIcon: <IoIosGlasses />,
      },
      portfolioId_3: {
        contentful_id: "3f72lftmOXB4lPRTZJfI73",
        icon: <GiConverseShoe />,
        activeIcon: <GiRunningShoe />,
      },
      portfolioId_4: {
        contentful_id: "3pidDuLDjGd8D5oFc8AiE7",
        icon: <RiShirtLine />,
        activeIcon: <RiShirtFill />,
      },
    },
    navigations: {
      home: {
        id: "home",
        name: "Home",
        path: "/",
        icon: <AiOutlineHome />,
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
        name: "Discount Products",
        path: "/discount-products",
        icon: <AiOutlinePercentage />,
        activeIcon: <RiPercentFill />,
      },
      recommendedProducts: {
        id: "recommended products",
        name: "Recommended Products",
        path: "/recommended-products",
        icon: <RiVipDiamondLine />,
        activeIcon: <RiVipDiamondFill />,
      },
      contact: {
        id: "contact",
        name: "Contact",
        path: "/contact",
        icon: <RiContactsLine />,
        activeIcon: <RiContactsFill />,
      },
      setting: {
        id: "setting",
        name: "Setting",
        path: "void(0)",
        icon: <IoMdSettings />,
        activeIcon: <IoIosSettings />,
      },
    },
    cart: {
      name: "Cart",
      cartPreview : "Cart Preview",
      cartEmpty : "Empty Item",
      cartAlert : "✅ Product is added to cart",
      checkoutButton : "Go to Checkout"
    },
    search: {
      placeholder: "Search...",
    },
    setting: {
      title: "Setting",
      contents: {
        locales: "Locales",
        mode: "Color Mode",
      },
      close: "Close",
    },
    colorMode: {
      light: "Light",
      dark: "Dark",
    },
    shop: {
      portfolio: {
        title: "Portfolio",
      },
    },
    page: {
      home: {
        categoryCarouselTitle: "Products Category",
      },
    },
    product: {
      newProducts: {
        id: "new-products",
        styledTitle: "Top",
        title: "New Products",
        path: "/new-products",
        pathIcon: <BsArrowRepeat />,
      },
      productPage: {
        manufactor: "Manufactor",
        origin: "Origin",
        size: "Size",
        quantity: "Quantity",
        colors : "Colors",
        information : "Product Information" ,
        description :"Product Description",
        readMore : "Read More", 
        shortenText : "Shorten Text",
        relevantProducts : "Relevant Products",        
        buttonAddToCart: {
          name: "Thêm vào giỏ hàng",
          icon: <MdAddShoppingCart />,
        },
        buttonPurchase: {
          name: "Mua ngay",
          icon: <BiPurchaseTag />,
        },
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
        title: "Licenses Policy",
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
        title: "Contact",
        listContacts: [
          {
            name: "facebook",
            path: "https://fb.com",
            icon: <FiFacebook />,
          },
          {
            name: "twitter",
            path: "https://twitter.com",
            icon: <FiTwitter />,
          },
          {
            name: "instagram",
            path: "https://instagram.com",
            icon: <AiOutlineInstagram />,
          },
        ],
      },
    },
    others: {
      seeAll: "See All",
    },
    breadcrumbs: {
      home: {
        name: "Home",
        path: "/",
      },
    },
    dialog : {
      agree : "Agree",
      disagree : "Disagree",
      removeProductFromCart : {
        title : "Remove Product from cart.",
        content : (name) => `<p>Are you sure to remove <strong>${name}</strong> from cart?</p>`
      }
    },
    checkout: {  
      cartEmpty : "Your cart is empty" ,
      buttonContinueShopping: "Continue Shopping",
      invoice: {
        temporaryTitle : "Temporary Invoice" ,
        title : "Invoice",
        totalBeforeTax: "Total Before Tax",
        tax: "Tax VAT",
        totalAfterTax: "Total After Tax",
        totalPrice: "Total Price",
        shippingFee : "Shipping Fee"
      },
      button_proceed_order : "Proceed to Order",
      userInformation : {
        fullname : "Full Name",        
        phone : "Phone",
        address : "Address",   
        ward : "Ward",
        district : "District",
        city : "City",
        button_change_information : "Update",
        button_create_new_information : "Create new Information",
        button_proceed_order : "Proceed Order",  
        link_change_information : "Update your information"        
      },
      payment : {
        listOfOrderedProducts: "List Of Ordered Products",
        typeOfShipping : {
          title : "Type of Shipping", 
          standard : {
            key : "standard", 
            value : "standard"
          },
          fast : {
            key : "fast",
            value : "fast delivery"
          }
        },        
        typeOfPayment : "Type of Payment",
        quantity : "Quantity", 
        unitPrice : "Unit Price",
        totalPrice : "Total price",
        shipping : "Shipping"
      }
    },

  },
}
