const Cart = () => {
  return (
    <div className="cart-section h-dvh w-full px-47 py-30 bg-background-gray flex gap-10">
      <div className="left-container w-3/4 flex flex-col gap-6">
        <div className="items-container flex bg-white p-10">
          <div className="restaurant-details flex gap-4">
            <div className="image-container w-32 h-32">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/58f0bc7f36111bdcba55b44313e6aa8f"
                alt=""
                className="icon w-full h-full"
              />
            </div>
            <div className="">
              <h1 className="restuarant-name text-4xl font-semibold">
                Palooda Desserts Club
              </h1>
              <h2 className="location text-2xl font-normal">Thaliparamba</h2>
            </div>
          </div>
          <div className="items">
            <div className="item-details"></div>
            <div className="count"></div>
            <div className="price"></div>
          </div>
          <div className="recipie-suggestion"></div>
        </div>
        <div className="payment-container  bg-white p-10">
          <h1>Choose payment method</h1>
          <button className="proceed-to-pay">PROCEED TO PAY</button>
        </div>
      </div>
      <div className="right-container bg-white px-8 py-10 w-1/4">
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
