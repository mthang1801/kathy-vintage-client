import React, { useRef, useEffect } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Wrapper, CartIcon, CartNumber, Dropdown } from "./styles/Cart.styles"
import {
  selectCartItems,
  selectShowCartDropdown,
  selectAlertCart,
} from "../../redux/cart/cart.selectors"
import {
  toggleCart,
  closeCart,
  removeAlertCart,  
} from "../../redux/cart/cart.actions"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import CartDropdown from "./CartDropdown"
import { navigate } from "gatsby"
import CartAlert from "./CartAlert"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
import { useLocation} from "@reach/router"
const Cart = ({
  cartItems,
  showCartDropdown,
  toggleCart,
  closeCart,
  alertCart,
  removeAlertCart,
}) => {
  const {pathname} = useLocation()
  const onClickCart = () => {    
    trackCustomEvent({
      action : "Click",
      category : "cart",
      label : "Click cart"
    })
        
    toggleCart()
    removeAlertCart();
    if (typeof window !== "undefined" &&  window.innerWidth < 768) {
      return navigate("/checkout")
    }
  }

  useEffect(() => {
    closeCart();
  },[pathname])
  const cartRef = useRef(false)
  useEffect(() => {
    function trackingUserClick(e) {     
      if (!cartRef?.current?.contains(e.target) && showCartDropdown) {
        closeCart()
      }
    }
    if(typeof window !== "undefined"){
      window.addEventListener("click", trackingUserClick)
    }
    return () => {
      if(typeof window !== "undefined"){
        window.removeEventListener("click", trackingUserClick)
      }
    }
  })

  const cartItemsQuantity = cartItems.reduce((acc,item) => acc + item.quantity, 0);
  return (
    <Wrapper
      type="button"
      aria-label="button-toggle-cart-dropdown"
      onClick={onClickCart}
      ref={cartRef}
    >
      <CartIcon>
        <AiOutlineShoppingCart />
      </CartIcon>
      {cartItems.length > 0 ? (
        <CartNumber>{cartItemsQuantity}</CartNumber>
      ) : null}
      {showCartDropdown && (
        <Dropdown>
          <CartDropdown cartItems={cartItems}/>
        </Dropdown>
      )}
      {alertCart && (
        <Dropdown>
          <CartAlert alertCart={alertCart} removeAlertCart={removeAlertCart} />
        </Dropdown>
      )}
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  showCartDropdown: selectShowCartDropdown,
  alertCart: selectAlertCart,
})

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart()),
  closeCart: () => dispatch(closeCart()),
  removeAlertCart: () => dispatch(removeAlertCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
