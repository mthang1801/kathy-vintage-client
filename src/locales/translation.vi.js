import React from 'react';
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePercentage,
  AiFillShop,
  AiOutlineShop,
  AiOutlineInstagram,
  AiOutlineFileSearch,
  AiOutlineUnorderedList,
  AiOutlineMail,
} from 'react-icons/ai';
import {
  RiPercentFill,
  RiVipDiamondFill,
  RiVipDiamondLine,
  RiContactsFill,
  RiContactsLine,
  RiBillLine,
  RiShirtLine,
  RiShirtFill,
} from 'react-icons/ri';
import { IoIosSettings, IoIosGlasses } from 'react-icons/io';
import {
  FiTwitter,
  FiFacebook,
  FiLogOut,
  FiCheckCircle,
  FiSettings,
} from 'react-icons/fi';
import { GiConverseShoe, GiRunningShoe } from 'react-icons/gi';
import { BsBagFill, BsBag, BsArrowRepeat, BsShieldLock } from 'react-icons/bs';
import { BiGlasses, BiPurchaseTag, BiUserPin, BiPhone } from 'react-icons/bi';
import { MdAddShoppingCart } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import { ImSpinner2 } from 'react-icons/im';
import { FaFacebookMessenger, FaFacebookF } from 'react-icons/fa';
import ZaloIcon from '../images/svgs/zalo-icon.svg';
export const vi = {
  translation: {
    auth: {
      login: 'Đăng nhập',
      register: 'Đăng ký',
      signInGoogle: 'Đăng nhập Google',
      signInFacebook: 'Đăng nhập Facebook',
      signInApple: 'Đăng nhập Apple',
      signupForm: {
        title: 'Đăng ký tài khoản',
        subTitle: 'Đăng ký tài khoản bằng email và password',
        button: 'Đăng ký',
        name: 'Tên',
        email: 'Địa chỉ Email',
        gender: 'Giới tính',
        password: 'Mật khẩu',
        confirmPassword: 'Xác nhận mật khẩu',
        requiredAndInvalidName:
          'Trường này là bắt buộc, tên người dùng có ít nhất 3 ký tự và dài nhất là 50 ký tự.',
        invalidName:
          'Tên không hợp lệ, tên người dùng có ít nhất 3 ký tự và dài nhất là 50 ký tự. ',
        invalidEmail: 'Email không hợp lệ',
        requiredAndInvalidEmail: 'Trường này là bắt buộc',
        invalidPassword:
          'Mật khẩu không hợp lệ, phải có ít nhất 8 ký tự bao gồm ký tự thường, ký tự in hoa, số và ký tự đặc biệt',
        requiredAndInvalidPassword:
          'Trường này là bắt buộc, phải có ít nhất 8 ký tự bao gồm ký tự thường, ký tự in hoa, số và ký tự đặc biệt',
        invalidConfirmPassword:
          'Mật khẩu xác nhận là bắt buộc và phải khớp với mật khẩu trên',
        confirmPasswordNotMatch:
          'Mật khẩu xác nhận và mật khẩu trên không trùng khớp',
        requiredError: 'Trường này là bắt buộc',
        requiredAndInvalidPassword: (minLength) =>
          `This field is required, Invalid, at least ${minLength} characters with a mix of letters, numbers & symbols`,
        invalidMinLength: (minLength) => `Phải có ít nhất ${minLength} ký tự`,
        invalidMaxLength: (maxLength) => `không vượt quá ${maxLength} ký tự`,
        footer: {
          haveAccount: {
            title: 'Đã có tài khoản',
            pathName: 'Đăng nhập',
            path: '/auth',
          },
          forgotPassword: {
            title: 'Quên mật khẩu?',
            pathName: 'Khôi phục mật khẩu',
            path: '/auth/restore-account',
          },
        },
      },
      loginForm: {
        title: 'Đăng nhập',
        subTitle: 'Đăng nhập tài khoản bằng email và mật khẩu',
        requireEmailAndPassword: 'Email và Password là bắt buộc',
        button: 'Đăng nhập',
        footer: {
          dontHaveAccount: {
            title: 'Chưa có tài khoản?',
            pathName: 'Đăng ký tài khoản',
            path: '/auth/signup',
          },
          forgotPassword: {
            title: 'Quên mật khẩu?',
            pathName: 'Khôi phục mật khẩu',
            path: '/auth/restore-account',
          },
        },
      },
      restoreAccountForm: {
        title: 'Khôi phục tài khoản',
        subTitle: 'Nhập địa chỉ email và xác nhận mật khẩu email gửi về',
        restoreButton: 'Khôi phục',
        restoreSuccessText:
          'Yêu cầu khôi phục tài khoản thành công, vui lòng kiểm tra email để kích hoạt lại mật khẩu',
      },
      restoreAccountDone:
        'Yêu cầu khôi phục tài khoản của bạn thành công, vui lòng kiểm tra email để kích hoạt mật khẩu mới.',
    },
    user: {
      settingAccount: {
        key: 'general-information',
        name: 'Thiết lập tài khoản',
        icon: <IoIosSettings />,
        path: '/user',
      },
      ordersHistory: {
        key: 'orders-history',
        name: 'Lịch sử đặt hàng',
        icon: <RiBillLine />,
        path: `/orders`,
      },
      signout: {
        name: 'Đăng xuất',
        icon: <FiLogOut />,
      },
      information: {
        title: 'Thông tin giao hàng',
        id: 'ID tài khoản',
        email: 'Email',
        fullname: 'Họ và tên',
        phone: 'Số điện thoại',
        city: 'Thành phố',
        district: 'Quận/ Huyện',
        ward: 'Phường/ Xã',
        address: 'Địa chỉ',
        errorMessages: {
          required: 'Trường này là bắt buộc',
          fullName: 'Bạn cần phải điền cả họ và tên',
          invalidPhone: 'Số điện thoại không hợp lệ',
        },
        confirm_submit_change_information: {
          title: 'Xác nhận thay đổi thông tin cá nhân',
          content: `
            <p>Bạn có chắc chắn muốn thay đổi những thông tin này?</p>
            <p style="font-weight:bold; color:red">Lưu ý : Bạn sẽ không thể cập nhật cho lần tiếp theo trong vòng 7 ngày.</p>
          `,
        },
        null_information_field: 'Chưa dược cập nhật',
        buttonSubmit: 'Hoàn tất',
        buttonUpdate: 'Cập nhật',
        buttonSaveChange: 'Lưu thay đổi',
        button_close_information_form: 'Đóng',
      },

      dashboard: {
        options: [
          {
            key: 'general-information',
            name: 'Thông tin chung',
            icon: <BiUserPin />,
          },
          {
            key: 'change-password',
            name: 'Thay đổi mật khẩu',
            icon: <BsShieldLock />,
          },
          {
            key: 'orders-history',
            name: 'Đơn hàng của bạn',
            icon: <AiOutlineUnorderedList />,
          },
          {
            key: 'setting-mode',
            name: 'Cài đặt',
            icon: <FiSettings />,
          },
        ],
      },
      password: {
        oldPassword: 'Mật khẩu cũ',
        newPassword: 'Mật khẩu mới',
        confirmNewPassword: 'Xác nhận mật khẩu mới',
        errorProvider: 'Tài khoản này không thể thay đổi mật khẩu',
        buttonConfirm: 'Lưu thay đổi',
        errorOldPassword: 'Mật khẩu cũ không chính xác',
        errorConfirmPassword: 'Mật khẩu nhập lại không chính xác',
        errorInvalidPassword:
          'Mật khẩu không hợp lệ, cần ít nhất 8 ký tự gồm chữ thường, chữ in hoa, số và ký tự đặc biệt.',
        errorServer: 'Cập nhật mật khẩu không thành công, có lỗi xảy ra',
        updatePasswordSuccess: 'Cập nhật mật khẩu thành công',
        countTimeToLogout: (counter) =>
          `<small style="color: #616161">Tài khoản sẽ tự động đăng xuất sau <span style="color:#e53935">${counter}</span> giây.</small>`,
        confirmDialog: {
          title: 'Xác nhận thay đổi mật khẩu',
          content: `
            <p>Bạn có chắc chắn muốn thay đổi mật khẩu?</p>
          `,
        },
      },
    },
    portfolioIcons: {
      portfolioId_1: {
        contentful_id: '3baS7MxSRZpYZ2fzItxVur',
        icon: <BsBag />,
        activeIcon: <BsBagFill />,
      },
      portfolioId_2: {
        contentful_id: '4yTnyIDJGdpMuzPJgY7QCA',
        icon: <BiGlasses />,
        activeIcon: <IoIosGlasses />,
      },
      portfolioId_3: {
        contentful_id: '3f72lftmOXB4lPRTZJfI73',
        icon: <GiConverseShoe />,
        activeIcon: <GiRunningShoe />,
      },
      portfolioId_4: {
        contentful_id: '3pidDuLDjGd8D5oFc8AiE7',
        icon: <RiShirtLine />,
        activeIcon: <RiShirtFill />,
      },
    },
    navigations: {
      home: {
        id: 'home',
        name: 'Trang chủ',
        path: '/',
        icon: <AiOutlineHome />,
        activeIcon: <AiFillHome />,
      },
      products: {
        id: 'shop',
        name: 'Shop',
        path: '/shop',
        icon: <AiOutlineShop />,
        activeIcon: <AiFillShop />,
      },
      discountProducts: {
        id: 'discount products',
        name: 'Khuyến mãi',
        path: '/discount-products',
        icon: <AiOutlinePercentage />,
        activeIcon: <RiPercentFill />,
      },
      recommendedProducts: {
        id: 'recommended products',
        name: 'Đề xuất',
        path: '/recommended-products',
        icon: <RiVipDiamondLine />,
        activeIcon: <RiVipDiamondFill />,
      },
      setting: {
        id: 'setting',
        name: 'Cài đặt',
        path: 'void(0)',
        icon: <FiSettings />,
        activeIcon: <IoIosSettings />,
      },
    },
    cart: {
      name: 'Giỏ hàng',
      cartPreview: 'Giỏ hàng của bạn',
      cartEmpty: 'Giỏ hàng trống',
      cartAlert: '✅ Thêm vào giỏ hàng thành công',
      checkoutButton: 'Xem giỏ hàng và thanh toán',
      quantity: 'Số lượng',
      totalPrice: 'Tổng tiền',
      completePrice: 'Thành tiền',
    },
    search: {
      placeholder: 'Tìm kiếm...',
    },
    setting: {
      title: 'Cài đặt',
      contents: {
        locales: 'Ngôn ngữ',
        mode: 'Chế độ Màn hình',
      },
      close: 'Đóng',
    },
    colorMode: {
      light: 'Sáng',
      dark: 'Tối',
    },
    shop: {
      portfolio: {
        title: 'Danh mục SP',
      },
    },
    page: {
      home: {
        categoryCarouselTitle: 'Danh Mục Sản phẩm',
      },
      template: {
        dialog: {
          title: 'Bộ lọc tìm kiếm',
          closeButton: 'Đóng',
        },
        sidebar: {
          navigation: {
            title: (pageLocation) =>
              pageLocation === 'portfolio'
                ? 'Danh mục sản phẩm'
                : pageLocation === 'category'
                ? 'Nhóm sản phẩm'
                : null,
          },
          sort: {
            title: 'Sắp xếp',
            fields: [
              {
                key: 'price_asc',
                value: 'Giá tăng dần',
              },
              {
                key: 'price_desc',
                value: 'Giá giảm dần',
              },
              {
                key: 'discount_asc',
                value: 'Khuyến mãi tăng dần',
              },
              {
                key: 'discount_desc',
                value: 'Khuyến mãi giảm dần',
              },
            ],
          },
          prices: {
            title: 'Giá',
            from: 'Từ',
            to: 'Đến',
            buttonFilter: 'Lọc',
            range: (from, to) =>
              to
                ? `Từ ${from.toLocaleString('de-DE')} đến ${to.toLocaleString(
                    'de-DE'
                  )}`
                : `${from.toLocaleString('de-DE')}`,
          },
          discount: {
            title: 'Khuyến mãi',
            fields: [
              {
                key: 'all',
                value: 'Tất cả',
              },
              {
                key: 'isDiscount',
                value: 'Đang giảm giá',
              },
              {
                key: 'isNotDiscount',
                value: 'Chưa giảm giá',
              },
            ],
          },
          manufactors: {
            title: 'Thương hiệu',
            all: {
              key: 'all',
              value: 'Tất cả',
            },
          },
          recommend: {
            title: 'Đề xuất',
            fields: {
              recommend: {
                key: 'recommend',
                value: 'Sản phẩm được đề xuất',
              },
              all: {
                key: 'all',
                value: 'Tất cả',
              },
            },
          },
        },
        content: {
          tabs: [
            {
              key: 'all',
              value: 'Tất cả',
            },
            {
              key: 'recommended',
              value: 'được đề xuất',
            },
            {
              key: 'latest',
              value: 'mới',
            },
            {
              key: 'bestSell',
              value: 'Bán chạy',
            },
          ],
          productCount: {
            name: (num) =>
              `<span>Tìm thấy <strong>${num}</strong> sản phẩm</span>`,
            icon: <AiOutlineFileSearch />,
          },
        },
      },
    },
    product: {
      bestSellProducts: {
        id: 'best-sell-products',
        styledTitle: 'Top',
        title: 'Sản phẩm bán chạy',
        path: '/best-sell-products',
        pathIcon: <BsArrowRepeat />,
      },
      newProducts: {
        id: 'new-products',
        styledTitle: 'TOP',
        title: 'Sản phẩm mới',
        path: '/new-products',
        pathIcon: <BsArrowRepeat />,
      },
      recommendedProducts: {
        id: 'recommended-products',
        styledTitle: 'Top',
        title: 'Sản phẩm được đề xuất',
        path: '/recommended-products',
        pathIcon: <BsArrowRepeat />,
      },
      productPage: {
        manufactor: 'Nhà sản xuất',
        origin: 'Xuất xứ',
        size: 'Kích thước',
        quantity: 'Số lượng',
        colors: 'Màu sắc',
        information: 'Thông tin sản phẩm',
        description: 'Mô tả sản phẩm',
        readMore: 'Xem thêm',
        shortenText: 'Thu gọn',
        relevantProducts: 'Sản phẩm tương tự',
        buttonAddToCart: {
          name: 'Thêm vào giỏ hàng',
          icon: <MdAddShoppingCart />,
        },
        buttonPurchase: {
          name: 'Mua ngay',
          icon: <BiPurchaseTag />,
        },
      },
    },
    footer: {
      about: {
        title: 'Về Kathy Vintage',
        companyName: '',
        registerDate: 'Ngày ĐK: 30/04/2021',
        taxCode: 'Mã số thuế: 0123456789',
        address: 'Địa chỉ: 627 Thống Nhất P16 Q. Gò Vấp',
        businessCode: 'Số ĐKKD: 4391FCS192',
        businessDateAward: 'Ngày cấp: 30/04/2021',
        awardAt: 'Phòng đăng ký kinh doanh Sở Kế Hoạch Đầu Tư TPHCM',
        hotline: 'Hotline: 0973.594.645',
        otherBrandsTitle: '',
        otherBrands: [],
      },
      licensesPolicy: {
        title: 'Chính sách hỗ trợ',
        listPolicies: {
          payment: {
            name: 'Thanh toán',
            path: '/liscense/payment',
          },
          forwarding: {
            name: 'Chính sách giao nhận',
            path: '/liscense/forwarding',
          },
          warrantyReturn: {
            name: 'Đổi trả - Bảo hành',
            path: '/liscense/warranty-return',
          },
          privacy: {
            name: 'Chính sách bảo mật',
            path: '/liscense/privacy-policy',
          },
        },
      },
      contact: {
        title: 'Liên hệ',
        listContacts: [
          {
            name: 'facebook',
            path: 'https://fb.com',
            icon: <FiFacebook />,
          },
          {
            name: 'twitter',
            path: 'https://twitter.com',
            icon: <FiTwitter />,
          },
          {
            name: 'instagram',
            path: 'https://instagram.com',
            icon: <AiOutlineInstagram />,
          },
        ],
      },
    },
    others: {
      seeAll: 'Xem Tất cả',
    },
    breadcrumbs: {
      home: {
        name: 'Trang chủ',
        path: '/',
      },
    },
    dialog: {
      agree: 'Đồng ý',
      disagree: 'Hủy bỏ',
      close: 'Đóng',
      removeProductFromCart: {
        title: 'Loại bỏ sản phẩm khỏi giỏ hàng',
        content: (name) =>
          `<p>Bạn có chắc chắn muốn loại bỏ <strong>${name}</strong> khỏi giỏ hàng?</p>`,
      },
      loading: 'Đang xử lý, vui lòng chờ trong giây lát.',
    },
    checkout: {
      cartEmpty: 'Không có sản phẩm nào trong giỏ hàng',
      orderEmpty: 'Không có đơn hàng nào vừa được thanh toán',
      buttonContinueShopping: 'Tiếp tục mua sắm',
      buttonBackHome: 'Trở về trang chủ',
      invoice: {
        orderTotalPrice: 'Tổng tiền đơn hàng',
        temporaryTitle: 'Hóa đơn tạm tính',
        title: 'Hóa đơn Thanh toán',
        totalBeforeTax: 'Tổng tiền trước thuế',
        tax: 'Thuế VAT',
        totalAfterTax: 'Tổng tiền sau thuế',
        totalPrice: 'Thành tiền',
        shippingFee: 'Phí vận chuyển',
      },
      button_proceed_order: 'Tiến hành đặt hàng',
      userInformation: {
        fullname: 'Họ tên',
        phone: 'Điện thoại',
        address: 'Địa chỉ',
        ward: 'Phường',
        district: 'Quận',
        city: 'Thành phố',
        button_change_information: 'Thay đổi thông tin',
        button_create_new_information: 'Tạo mới thông tin',
        button_proceed_order: 'Tiến hành đặt hàng',
        link_change_information: 'Chỉnh sửa thông tin giao hàng',
      },
      payment: {
        listOfOrderedProducts: 'Danh sách Đơn hàng',
        shippingInformation: 'Thông tin giao hàng',
        invoice: 'Hóa đơn',
        typeOfShipping: {
          title: 'Phương thức vận chuyển',
          standard: {
            key: 'standard',
            value: 'Tiêu chuẩn',
          },
          fast: {
            key: 'fast',
            value: 'Giao hàng nhanh (Chỉ áp dụng trong nội thành)',
          },
        },
        typeOfPayment: {
          title: 'Phương thức thanh toán',
          payment_in_cash: {
            key: 'payment_in_cash',
            value: 'Thanh toán bằng tiền mặt',
          },
          payment_in_card: {
            key: 'payment_in_card',
            value: 'Thanh toán bằng thẻ Credit Card, Visa, Master Card...',
          },
          payment_in_card_button: 'Tiến hành đặt hàng',
        },
        quantity: 'Số lượng',
        unitPrice: 'Đơn giá',
        price: 'Tổng tiền',
        totalPrice: 'Thành tiền',
        shipping: 'Giao hàng',
        product: {
          color: 'Màu sắc',
          size: 'Size',
        },
      },
      complete: {
        header_letter: 'Cám ơn bạn đã mua hàng tại Kathy Vintage',
        body_letter: (orderId, estimatedTime, email) => `          
          <p>Mã đơn hàng của bạn là: <strong>${orderId}</strong></p>
          <p>Bạn có thể xem lại toàn bộ đơn hàng tại <a href="/orders">Đây</a></p>
          <p>Thời gian dự kiến giao hàng <i>${estimatedTime}</i> (có thể thời gian sẽ trễ hơn do tình hình dịch COVID-19 đang diễn ra phức tạp)</p>
          <p>Thông tin chi tiết đơn hàng sẽ được gửi về email <strong>${email}</strong>. Bạn vui lòng check email để kiểm tra lại đơn hàng. Trong trường hợp không thấy email, bạn vui lòng kiểm trong hộp thư <strong>Spam</strong> hoặc <strong>Junk Folder</strong> hoặc báo cáo với quản trị viên.</p>          
        `,
        body_footer: 'Trân trọng cám ơn, đội ngũ Kathy Vintage',
        backHomeButton: 'Trở lại trang chủ',
      },
    },
    orders: {
      title: 'Lịch sử Đơn đặt hàng',
      product: {
        orderTotalPrice: 'Tổng tiền đơn hàng',
        unitPrice: 'Đơn giá',
        quantity: 'Số lượng',
        shipping_fee: 'Phí vận chuyển',
        totalPrice: 'Tổng tiền',
        totalBeforeTax: 'Tổng tiền trước thuế',
        tax: 'Thuế VAT',
        totalAfterTax: 'Tổng tiền sau thuế',
        sent: 'Đặt hàng',
        received: 'Đã nhận đơn hàng',
        shipping: 'Đang giao hàng',
        complete: 'Hoàn thành',
        processing: 'Đang xử lý',
        productsList: 'Danh sách Sản phẩm',
        orderStatus: 'Tình trạng đơn hàng',
        orderPrice: 'Hóa đơn',
      },
      status: {
        active: {
          label: 'Đang tiến hành',
          icon: <ImSpinner2 />,
        },
        canceled: {
          label: 'Đã hủy',
          icon: <TiDeleteOutline />,
        },
        completed: {
          label: 'Hoàn tất',
          icon: <FiCheckCircle />,
        },
      },
      emptyOrder: 'Không tìm thấy đơn hàng.',
      buttonBackHome: 'Trở lại trang chủ',
      cancelOrderButton: 'Hủy Đơn hàng',
      cancelTitle: 'Hủy đơn hàng!',
      cancelOrderHTML: `<p>Bạn có chắc chắn muốn hủy đơn hàng này?</p>`,
      readMoreOrders: 'Xem thêm',
    },
    search: {
      emptyResult: (key) => `Không tìm thấy sản phẩm nào có từ khóa ${key}`,
      placeholder: 'Nhập tên sp bạn muốn tìm ...',
    },
    contacts: [
      { key: 'facebook', icon: <FaFacebookF />, name: 'Facebook' },
      { key: 'zalo', icon: <ZaloIcon />, name: 'Zalo' },
      { key: 'phone', icon: <BiPhone />, name: '0973594645' },
      { key: 'email', icon: <AiOutlineMail />, name: 'Email' },
    ],
    seo: {
      home: 'Trang chủ',
      orders: 'Lịch sử đơn hàng',
    },
  },
};
