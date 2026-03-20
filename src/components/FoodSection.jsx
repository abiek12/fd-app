// Components
export const FoodSection = (props) => {
  const { userName, foods } = props;
  const baseUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb";
  return (
    <section className="food-section">
      <div className="heading-section">
        <div className="call-to-action">{userName}, what's on your mind?</div>
      </div>
      <div className="food-grp">
        {foods.map((i) => {
          return (
            <a key={i.id} className="item">
              <img src={`${baseUrl}/${i.urlCode}`} />
            </a>
          );
        })}
      </div>
    </section>
  );
};
