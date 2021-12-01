import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AlertDialog from '../UI/FeedBacks/Dialog/AlertDialog';
import { connect } from 'react-redux';
import { cancelOrder } from '../../redux/orders/orders.actions';
const OrderControl = ({ order, ordersTranslation, cancelOrder }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const onCancelOrder = () => {
    setOpenDialog(true);
  };
  const onAgreeDialog = () => {
    cancelOrder(order.id);
  };
  return (
    <>
      <div style={{ margin: '1rem 0', marginLeft: 'auto' }}>
        <Button
          color="secondary"
          variant="text"
          style={{ textTransform: 'capitalize' }}
          onClick={onCancelOrder}
        >
          {ordersTranslation.cancelOrderButton}
        </Button>
      </div>
      <AlertDialog
        open={openDialog}
        setOpen={setOpenDialog}
        content={ordersTranslation.cancelOrderHTML}
        title={ordersTranslation.cancelTitle}
        onAgree={onAgreeDialog}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cancelOrder: (orderId) => dispatch(cancelOrder(orderId)),
});

export default connect(null, mapDispatchToProps)(OrderControl);
