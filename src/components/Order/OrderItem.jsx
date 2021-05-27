import React from "react"
import {
  Wrapper,
  Title,
  OrderStatus,
  OrderLabel,
} from "./styles/OrderItem.styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import Divider from "@material-ui/core/Divider"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { convertSecondsTimeToDate } from "../../utils/firebase.utils"
import ProductItem from "./ProductItem"
import OrderPriceItem from "./OrderPriceItem"
import OrderStatusStepper from "./OrderStatusStepper"
import OrderControl from "./OrderControl"
import { useTheme } from "../../theme"

const OrderItem = ({ order, ordersTranslation, userPage }) => {
  const { theme } = useTheme()  
  return (
    <Wrapper theme={theme} userPage={userPage}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <OrderLabel>
            <div>
              <strong>{order.id}</strong>
            </div>
            <OrderStatus status={order.order_status}>
              {ordersTranslation.status[order.order_status]?.icon}
              <span>{ordersTranslation.status[order.order_status]?.label}</span>
            </OrderStatus>
          </OrderLabel>
          <div style={{ color: "var(--red-3)" }}>
            <strong>{convertSecondsTimeToDate(order.createdAt.seconds)}</strong>
          </div>
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

          {order.shipping_status && (
            <>
              <Title>{ordersTranslation.product.orderStatus}</Title>
              <OrderStatusStepper
                status={order.shipping_status}
                ordersTranslation={ordersTranslation}
              />
            </>
          )}
          <Divider />
          <Title>{ordersTranslation.product.orderPrice}</Title>
          <OrderPriceItem order={order} ordersTranslation={ordersTranslation} />

          {order.order_status === "active" &&
            !order.shipping_status.received &&
            !order.shipping_status.shipping &&
            !order.shipping_status.complete && (
              <>
                <Divider />
                <OrderControl
                  order={order}
                  ordersTranslation={ordersTranslation}
                />
              </>
            )}
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

export default OrderItem
