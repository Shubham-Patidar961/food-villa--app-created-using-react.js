import { restocart, imgurl } from "./config";
import { useEffect, useState } from "react";
import Shimmer2 from "./shimmer";
import { Link } from "react-router-dom";

function filterresto(filter2, text) {
  const data = filter2.filter((currents) =>
    currents.data?.name.toLowerCase()?.includes(text.toLowerCase())
  );
  return data;
}
const Restocard = ({ name, cuisines, cloudinaryImageId, area, avgRating }) => {
  return (
    <>
      <div className="restocart">
        <img alt="cart" className="img" src={imgurl + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5> {cuisines.join(" , ")}</h5>
        <h5>{area} </h5>
        <h6 className="rating">*{avgRating} </h6>
      </div>
    </>
  );
};

const Body = () => {
  const [text, setText] = useState("");
  const [restorent, setRestorent] = useState([]);
  const [filter2, setFilter2] = useState([]);
  async function restolist() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7193054&lng=75.8836558&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const data2 = json.data?.cards[2]?.data?.data?.cards;
    setRestorent(data2);
    setFilter2(data2);
    console.log(data2);
  }

  useEffect(() => {
    restolist();
    // setRestorent(restolist());
  }, []);
  return (
    <>
      <div className="serchfield">
        <input
          placeholder=" search "
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let filterdata = filterresto(restorent, text);
            console.log(filterdata);
            // pass filter data in update resto
            setFilter2(filterdata);
          }}
        >
          Click
        </button>
      </div>
      {/* condital rendering  */}
      {restorent.length === 0 ? (
        <Shimmer2 />
      ) : (
        <div className="restocards">
          {filter2.map((current) => {
            return (
              <Link to={"/restodetales/" + current.data.id}>
                <Restocard {...current.data} key={current.data.id} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
