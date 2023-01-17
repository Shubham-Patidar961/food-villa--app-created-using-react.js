const Restorentcard = ({ restorent }) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = restorent.data.data;
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          restorent.data.data.cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")} </h3>
      <h4>{avgRating} </h4>
    </div>
  );
};
export default Restorentcard;
