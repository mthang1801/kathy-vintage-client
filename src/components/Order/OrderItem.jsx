import React from "react"
import { Wrapper, Title } from "./styles/OrderItem.styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Divider from "@material-ui/core/Divider"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { convertSecondsTimeToDate } from "../../utils/firebase.utils"
import ProductItem from "./ProductItem"
import OrderPriceItem from "./OrderPriceItem"
import OrderStatusStepper from "./OrderStatusStepper"

const OrderItem = ({ order, ordersTranslation }) => {
  
  return (
    <Wrapper>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span>
            <strong>{order.id}</strong>
          </span>
          <span style={{ color: "var(--red-3)" }}>
            <strong>{convertSecondsTimeToDate(order.createdAt.seconds)}</strong>
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <Title>{ordersTranslation.product.productsList}</Title>
          {order.products_line.map(product => (
            <ProductItem
              key={product.slug}
              product={product}
              ordersTranslation={ordersTranslation}
            />
          ))}
          <Divider />
          <Title>{ordersTranslation.product.orderStatus}</Title>
          {order.status && (
            <OrderStatusStepper
              status={order.status}
              ordersTranslation={ordersTranslation}
            />
          )}
          <Divider />
          <Title>{ordersTranslation.product.orderPrice}</Title>
         <OrderPriceItem order={order} ordersTranslation={ordersTranslation}/>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

export default OrderItem
