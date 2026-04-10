import { PencilIcon, SealPercentIcon } from "@phosphor-icons/react";

const Cart = () => {
  return (
    <div className="cart-section h-dvh w-full px-47 py-30 bg-background-gray flex gap-10">
      <div className="left-container w-3/4 flex flex-col gap-6">
        <div className="items-container flex bg-white p-10">
          <div className="restaurant-details flex gap-4">
            <div className="image-container w-24 h-24">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/58f0bc7f36111bdcba55b44313e6aa8f"
                alt=""
                className="icon w-full h-full"
              />
            </div>
            <div className="">
              <h1 className="restuarant-name text-3xl font-semibold">
                Palooda Desserts Club
              </h1>
              <h2 className="location text-xl font-normal">Thaliparamba</h2>
            </div>
          </div>
          <div className="items">
            <div className="item-details"></div>
            <div className="count"></div>
            <div className="price"></div>
          </div>
          <div className="recipie-suggestion"></div>
        </div>
        <div className="payment-container bg-white p-10 flex flex-col gap-8">
          <h1 className="text-xl font-bold">Choose payment method</h1>
          <button className="proceed-to-pay cursor-pointer w-full py-4 px-8 text-center bg-tertiary-accent hover:bg-tertiary-hover-accent text-white">
            PROCEED TO PAY
          </button>
        </div>
      </div>
      <div className="right-container w-1/4 flex flex-col gap-6">
        <div className="bg-white px-8 py-10 flex flex-col gap-6">
          <div className="delivery-address flex flex-col gap-2">
            <div className="heading flex justify-between items-center">
              <h1 className="text-lg font-bold">Delivery Address</h1>
              <PencilIcon
                size={20}
                color="#ff5200"
                className="cursor-pointer"
              />
            </div>
            <div className="address">
              <div className="address-name text-lg font-semibold">Home</div>
              <div className="building-area text-sm text-gray-600">
                Puthiyapurayil House, Parassinikadavu, Kerala, India
              </div>
            </div>
            <div className="estimated-time text-sm font-medium">21 MINS</div>
          </div>
          <div className="apply-coupon flex justify-start items-center gap-3 p-4 border border-dashed border-gray-400 cursor-pointer">
            <SealPercentIcon size={24} color="#77767b" />
            <p className="text-sm text-gray-700 font-medium">Apply Coupon</p>
          </div>
          <div className="bill-details flex flex-col gap-2">
            <h4 className="text-sm font-semibold">Bill Details</h4>
            <div className="item-total flex justify-between items-center text-sm text-gray-500 font-normal">
              <p className="">Item Total</p>
              <p className="">₹250</p>
            </div>
            <div className="delivery-fee flex justify-between items-center text-sm text-gray-500 font-normal">
              <p>Delivery Fee | 2.1 kms</p>
              <p>₹51</p>
            </div>
            <hr className="my-2 border-t border-dashed border-gray-300" />
            <div className="gst-other-charges flex justify-between items-center text-sm text-gray-500 font-normal">
              <p>GST & Other Charges</p>
              <p>₹50</p>
            </div>
            <hr className="my-3 border-t-2 border-gray-600" />
            <div className="grand-total flex justify-between items-center text-sm font-semibold">
              <p>TO PAY</p>
              <p>₹351</p>
            </div>
          </div>
        </div>
        <div className="savings p-4 bg-green-200 border border-solid border-green-600 text-green-800 font-medium">
          <h4>Savings of ₹25</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
