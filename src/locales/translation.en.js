import React from "react"
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePercentage,
  AiFillShop,
  AiOutlineShop,
  AiOutlineInstagram,
  AiOutlineFileSearch,
  AiOutlineUnorderedList,
  AiOutlineMail
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
import { IoIosSettings, IoIosGlasses, IoMdSettings } from "react-icons/io"
import { FiTwitter, FiFacebook, FiLogOut, FiCheckCircle, FiSettings } from "react-icons/fi"
import { GiConverseShoe, GiRunningShoe } from "react-icons/gi"
import { BsBagFill, BsBag, BsArrowRepeat, BsShieldLock } from "react-icons/bs"
import { BiGlasses, BiPurchaseTag, BiUserPin, BiPhone } from "react-icons/bi"
import { MdAddShoppingCart } from "react-icons/md"
import { TiDeleteOutline } from "react-icons/ti"
import { ImSpinner2 } from "react-icons/im"
import { FaFacebookMessenger, FaFacebookF } from "react-icons/fa"
import ZaloIcon from "../images/zalo-icon.svg"
import GmailIcon from "../images/gmail-icon.svg"
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
      restoreAccountDone : " We have received your suggestion about restoring your email account. You need to check your email to activate restore password feature and update new password.."
    },
    user: {
      settingAccount: {
        key : "general-information",
        name: "Setting your account",
        icon: <IoIosSettings />,
        path: "/user",
      },
      ordersHistory: {
        key : "orders-history",
        name: "Orders History",
        icon: <RiBillLine />,
        path: `/orders`,
      },
      signout: {
        name: "Sign out",
        icon: <FiLogOut />,
      },
      information: {
        title: "Form Information",
        id : "Account ID",
        email : "Email",
        fullname: "Full Name",
        phone: "Phone Number",
        city: "Select City",
        district: "Select District",
        ward: "Select Ward",
        address: "Select Address",
        errorMessages: {
          required: "This field is required",
          fullName: "You need to type first name and last name",
          invalidPhone: "Invalid phone number",
        },
        confirm_submit_change_information : {
          title : "Confirm Your Change Information",
          content : `
            <p>Are your sure to change your information?</p>
            <p style="color:red; font-weight:bold">You will be unable to change this within next 7 days.</p>
          `
        },
        null_information_field : "Not Updated Yet",
        buttonSubmit: "Complete",
        buttonUpdate: "Update",
        buttonSaveChange : "Save Change",
        button_close_information_form: "Close",
      },
      
      dashboard : {
        options : [
          {
            key : "general-information", 
            name : "General Information", 
            icon : <BiUserPin/>
          },
          {
            key : "change-password", 
            name : "Change Password", 
            icon : <BsShieldLock/>
          },
          {
            key : "orders-history",
            name : "Orders History",
            icon : <AiOutlineUnorderedList/>
          },
          {
            key : "setting-mode",
            name : "Setting",
            icon: <FiSettings />,
          }
        ],
      },
      password : {
        oldPassword : "Old Password",
        newPassword : "New Password",
        confirmNewPassword : "Confirm New Password",
        errorProvider : "This Account can't be changed password",
        buttonConfirm : "Save Change",
        errorOldPassword : "Old Password is not correct",
        errorConfirmPassword : "Confirm Password is not correct",
        errorInvalidPassword : "Password is not valid, minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
        errorServer : "Something went wrong, try again",
        updatePasswordSuccess : "Update Password success",
        countTimeToLogout : counter => `<small style="color: #616161">Your account will be logged out automatically after <span style="color:#e53935">${counter}</span> seconds..</small>`,
        confirmDialog : {
          title: "Confirm change password", 
          content : `
            <p>Are you sure to change password?</p>
          `
        }
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
        icon: <FiSettings />,
        activeIcon: <IoMdSettings />,
      },
    },
    cart: {
      name: "Cart",
      cartPreview: "Cart Preview",
      cartEmpty: "Empty Item",
      cartAlert: "✅ Product is added to cart",
      checkoutButton: "Go to Checkout",
      price: "Price",
      quantity: "Quantity",
      totalPrice: "Price",
      completePrice: "Total Price",
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
      template: {    
        dialog : {
          title : "Products Filter",
          closeButton : "Close"
        },
        sidebar: {
          navigation: {
            title: (pageLocation) => pageLocation === "portfolio" ? "Product Categories" : pageLocation === "category" ? "Product Group List" : null,
          },
          sort : {
            title : "Sorting",
            fields : [
              {
                key : "price_asc",
                value : "Price Ascending"
              },
              {
                key : "price_desc",
                value : "Price Descending"
              },
              {
                key : "discount_asc",
                value : "Discount Ascending"
              },
              {
                key : "discount_desc",
                value : "Discount Descending"
              },
            ]
          },
          prices: {
            title: "Prices",
            from : "From" , 
            To : "To",
            buttonFilter : "Filter",
            range: (from, to = null) =>
              to
                ? `From ${from.toLocaleString("de-DE")} to ${to.toLocaleString(
                    "de-DE"
                  )}`
                : `${from.toLocaleString("de-DE")}`,
          },
          discount: {
            title: "Discount",
            fields :[
              {
                key: "all",
                value: "All",
              },
              {
                key: "isDiscount",
                value: "Discounting",
              },
               {
                key: "isNotDiscount",
                value: "Not Discounting",
              },
              
            ]
          },
          manufactors : {
            title : "Manufactors",
            all : {
              key : "all",
              value : "All"
            }
          },
          recommend : {
            title : "Recommend",
            fields : {
              recommend : {
                key : "recommend",
                value : "Recommend"
              },
              all : {
                key : "all", 
                value : "all"
              }
            }
          }
        },
        content : {
          tabs : [
            {
              key: "all", 
              value : "All"
            },
            {
              key : "recommended",
              value : "Recommended Products"
            },
            {
              key : "latest",
              value : "Latest products"
            },
            {
              key : "bestSell",
              value : "Best Sell Products"
            }
            
          ],
          productCount : {
            name : (num) => `<span>Find <strong>${num}</strong> products</span>`,
            icon : <AiOutlineFileSearch/>
          },
        }
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
      recommendedProducts: {
        id: "recommended-products",
        styledTitle: "Top",
        title: "Recommended Products",
        path: "/recommended-products",
        pathIcon: <BsArrowRepeat />,
      },
      productPage: {
        manufactor: "Manufactor",
        origin: "Origin",
        size: "Size",
        quantity: "Quantity",
        colors: "Colors",
        information: "Product Information",
        description: "Product Description",
        readMore: "Read More",
        shortenText: "Shorten Text",
        relevantProducts: "Relevant Products",
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
    dialog: {
      agree: "Agree",
      disagree: "Disagree",
      close: "Close",
      removeProductFromCart: {
        title: "Remove Product from cart.",
        content: name =>
          `<p>Are you sure to remove <strong>${name}</strong> from cart?</p>`,
      },
      loading: "Waiting for progressing",
    },
    checkout: {
      cartEmpty: "Your cart is empty",
      orderEmpty: "Your order is empty",
      buttonContinueShopping: "Continue Shopping",
      buttonBackHome: "Back Home",
      invoice: {
        temporaryTitle: "Temporary Invoice",
        title: "Invoice",
        totalBeforeTax: "Total Before Tax",
        tax: "Tax VAT",
        totalAfterTax: "Total After Tax",
        totalPrice: "Total Price",
        shippingFee: "Shipping Fee",
      },
      button_proceed_order: "Proceed to Order",
      userInformation: {
        fullname: "Full Name",
        phone: "Phone",
        address: "Address",
        ward: "Ward",
        district: "District",
        city: "City",
        button_change_information: "Update",
        button_create_new_information: "Create new Information",
        button_proceed_order: "Proceed Order",
        link_change_information: "Update your information",
      },
      payment: {
        listOfOrderedProducts: "List Of Ordered Products",
        shippingInformation: "Shipping Information",
        invoice: "Invoice",
        typeOfShipping: {
          title: "Type of Shipping",
          standard: {
            key: "standard",
            value: "standard",
          },
          fast: {
            key: "fast",
            value: "fast delivery",
          },
        },
        typeOfPayment: {
          title: "Type of Payment",
          payment_in_cash: {
            key: "payment_in_cash",
            value: "Payment In Cash",
          },
          payment_in_card: {
            key: "payment_in_card",
            value: "Payment In Credit Card, VISA, Master...",
          },
          payment_in_card_button: "Proceed to order",
        },
        quantity: "Quantity",
        unitPrice: "Unit Price",
        price: "Price",
        totalPrice: "Total price",
        shipping: "Shipping",
      },
      complete: {
        header_letter: "Thank you for buying product from tnshop",
        body_letter: (orderId, estimatedTime, email) => `
          <p>Your Order Id: <strong>${orderId}</strong></p>
          <p>You can see this order at <a href="/orders">My Orders</a></p>
          <p>Estimated delivery time is <i>${estimatedTime}</i></p>
          <p>The information detail about this order will be sent to your email <strong>${email}</strong>, please check your mail. If you don't see, you can check at <strong>Span</strong> or <strong>Junk Folder</strong></p> or report to administrator to solve your problem.
        `,
        body_footer: "Best regards, from tnshop team.",
        backHomeButton: "Back Home",
      },
    },
    orders: {
      title: "History Orders",
      product: {
        unitPrice: "Unit Price",
        quantity: "Quantity",
        shipping_fee: "Shipping Fee",
        totalPrice: "Total",
        totalBeforeTax: "Total Before Tax",
        tax: "Tax VAT",
        totalAfterTax: "Total After Tax",
        sent: "Sent",
        received: "Received",
        shipping: "Shipping",
        complete: "Complete",
        processing: "Processing",
        productsList: "Products List",
        orderStatus: "Order Status",
        orderPrice: "Order Price",
      },
      status: {
        active: {
          label: "Processing",
          icon: <ImSpinner2 />,
        },
        canceled: {
          label: "canceled",
          icon: <TiDeleteOutline />,
        },
        completed: {
          label: "Completed",
          icon: <FiCheckCircle />,
        },
      },
      emptyOrder: "No Order",
      buttonBackHome: "Back Home",
      cancelOrderButton: "Cancel Order",
      cancelTitle: "Cancel Order",
      cancelOrderHTML: `<p>Are you sure to cancel this order?</p>`,
      readMoreOrders: "Read More",
    },
    search : {
      emptyResult : (key) => `No results have been found for ${key}`,
      placeholder : "Search..."
    },
    contacts:[      
      { key : "facebook", icon: <FaFacebookF />, name: 'Facebook' },
      { key: "zalo", icon: <ZaloIcon />, name: "Zalo" },
      { key : "phone", icon: <BiPhone />, name: '0123456789' },
      { key: "email", icon: <GmailIcon />, name: 'Email' },       
    ]
  },
}
