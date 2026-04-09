const Cart = () => {
  return (
    <div className="cart-section h-dvh px-47 py-30">
      <div className="left-container">
        <div className="items-container">
          <div className="restaurant-details"></div>
          <div className="items">
            <div className="item-details"></div>
            <div className="count"></div>
            <div className="price"></div>
          </div>
          <div className="recipie-suggestion"></div>
        </div>
        <div className="payment-container">
          <h1>Choose payment method</h1>
          <button className="proceed-to-pay">PROCEED TO PAY</button>
        </div>
      </div>
      <div className="right-container">
        <div className="delivery-address">
          <div className="heading">
            <h1>Delivery Address</h1>
            <h1>CHANGE</h1>
          </div>
          <div className="address"></div>
          <div className="estimated-time"></div>
        </div>
        <div className="apply-coupon"></div>
        <div className="bill-details">
          <h4>Bill Details</h4>
          <div className="item-total">
            <p>Item Total</p>
            <p>₹250</p>
          </div>
          <div className="delivery-fee">
            <p>Delivery Fee | 2.1 kms</p>
            <p>₹51</p>
          </div>
          <div className="gst-other-charges">
            <p>GST & Other Charges</p>
            <p>₹50</p>
          </div>
          <hr />
          <div className="grand-total">
            <p>TO PAY</p>
            <p>₹351</p>
          </div>
          <div className="savings">
            <h4>Savings of ₹25</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
