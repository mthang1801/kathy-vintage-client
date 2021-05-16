import React from "react"
import { InputGroup, Button, Input } from "./styles/QuantityControl.styles"
import { IoMdAdd, IoMdRemove } from "react-icons/io"
import { useTheme } from "../../theme"
const QuantityControl = ({
  quantity,
  setQuantity,
  product,
  increaseProductQuantity,
  decreaseProductQuantity,
}) => {
  const { theme } = useTheme()
  const onDecreaseQuantity = () => {
    if (quantity <= 0) return
    if(setQuantity){
      setQuantity(prevQuantity => prevQuantity - 1)
    }    
    if (product) {
      decreaseProductQuantity(product)
    }
  }
  const onIncreaseQuantity = () => {
    if(setQuantity){
      setQuantity(prevQuantity => prevQuantity + 1)
    }    
    if (product) {
      increaseProductQuantity(product)
    }
  }
  const onChangeQuantity = e => {
    if (e.target.value < 0) return
    setQuantity(e.target.value)
  }
  return (
    <InputGroup>
      <Button
        disabled={quantity <= 0}
        onClick={onDecreaseQuantity}
        theme={theme}
      >
        <IoMdRemove />
      </Button>
      <Input
        type="number"
        min={0}
        value={quantity}
        theme={theme}
        onChange={onChangeQuantity}
      />
      <Button onClick={onIncreaseQuantity} theme={theme}>
        <IoMdAdd />
      </Button>
    </InputGroup>
  )
}

export default QuantityControl
