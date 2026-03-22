// Components
export const FoodSection = (props) => {
  const { userName, foods } = props;
  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb";
  return (
    <section className="food-section px-47 py-30 flex flex-col gap-6">
      <div className="heading-section">
        <div className="call-to-action text-2xl font-semibold">
          {userName}, what's on your mind?
        </div>
      </div>
      <div className="food-grp flex gap-8 w-full min-w-full overflow-x-scroll overflow-y-hidden">
        {foods.map((i) => {
          return (
            <a
              key={i.id}
              className="item w-36 min-w-36 h-44 min-h-44 border-none py-4"
            >
              <img
                className="w-full h-full bg-primary-bg object-cover border-none"
                src={`${baseUrl}/${i.urlCode}`}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};
