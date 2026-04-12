import { PencilIcon, SealPercentIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { decreaseCount, increaseCount } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleDecreaseCount = (targetId) => {
    dispatch(decreaseCount(targetId));
  };

  const handleIncreaseCount = (targetId) => {
    dispatch(increaseCount(targetId));
  };

  const totalPrice =
    cart.items.reduce((acc, i) => {
      return acc + (i.price || i.defaultPrice || 0) * i.count;
    }, 0) / 100;
  const deliveryCharge = 50;
  const gst = 25;

  return (
    <div className="cart-section h-dvh w-full px-47 py-30 bg-background-gray flex gap-10">
      <div className="left-container w-3/4 flex flex-col gap-6">
        <div className="items-container bg-white p-10 flex flex-col gap-8">
          <div className="restaurant-details flex gap-4">
            <div className="image-container w-24 h-24">
              <img
                src={`${CDN_URL}/${cart?.items[0]?.imageId}`}
                alt=""
                className="icon w-full h-full"
              />
            </div>
            <div className="border-b-4 border-solid border-gray-400">
              <h1 className="restuarant-name text-3xl font-semibold">
                {cart?.items[0]?.restuarantName}
              </h1>
              <h2 className="location text-xl font-normal">
                {cart?.items[0]?.restuarantName}
              </h2>
            </div>
          </div>
          <div className="item-details flex gap-8 justify-start items-start">
            <div className="items w-1/2 max-h-80 overflow-y-scroll pr-8">
              {cart.items.map((i, idx) => {
                return (
                  <div
                    key={idx}
                    className="item flex justify-between items-center gap-12 py-4"
                  >
                    <div className="item-details flex-1 min-w-0">
                      <div className="name text-base font-semibold">
                        {i.name}
                      </div>
                      <div className="desc text-sm font-normal text-gray-600">
                        {i.description}
                      </div>
                    </div>
                    <div className="update-count w-28 flex justify-between items-center border border-solid border-gray-400">
                      <button
                        onClick={() => {
                          handleDecreaseCount(i.id);
                        }}
                        className="border-r border-solid border-gray-300 px-3 py-1 cursor-pointer text-red-700 hover:bg-red-100"
                      >
                        -
                      </button>
                      <div className="count px-3 py-1">{i?.count}</div>
                      <button
                        onClick={() => {
                          handleIncreaseCount(i.id);
                        }}
                        className="border-l border-solid border-gray-300 px-3 py-1 cursor-pointer text-green-700 hover:bg-green-100"
                      >
                        +
                      </button>
                    </div>
                    <div className="price w-20 text-end">
                      ₹{((i?.price || i?.defaultPrice) / 100) * i.count}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="recipie-suggestion w-1/2 min-h-1/4 max-h-1/1 py-4">
              <input
                type="text"
                className="bg-gray-200 p-4 placeholder:text-sm w-full h-full"
                placeholder="Any suggestions? We will pass it on to chef."
              />
            </div>
          </div>
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
              <p className="">₹{totalPrice}</p>
            </div>
            <div className="delivery-fee flex justify-between items-center text-sm text-gray-500 font-normal">
              <p>Delivery Fee | 2.1 kms</p>
              <p>₹{deliveryCharge}</p>
            </div>
            <hr className="my-2 border-t border-dashed border-gray-300" />
            <div className="gst-other-charges flex justify-between items-center text-sm text-gray-500 font-normal">
              <p>GST & Other Charges</p>
              <p>₹{gst}</p>
            </div>
            <hr className="my-3 border-t-2 border-gray-600" />
            <div className="grand-total flex justify-between items-center text-sm font-semibold">
              <p>TO PAY</p>
              <p>₹{totalPrice + deliveryCharge + gst}</p>
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
