export const Footer = () => {
  return (
    <footer className="main-footer-section py-30 px-47 flex justify-between items-center gap-8 bg-off-white-bg">
      <div className="logo-img-container flex flex-col gap-3">
        <img
          src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
          alt="swiggy log"
        />
        <p className="text-sm text-gray-500">© 2026 Swiggy Limited</p>
      </div>
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">
          For better experience, download the Swiggy app now
        </h2>
        <div className="flex gap-4">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="Apple app store image"
            className="cursor-pointer"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt="android playstore imgage"
            className="cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};
