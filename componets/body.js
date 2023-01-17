import restolist from "./constant";
import Restorentcard from "./restocart";
const Body = () => {
  return (
    <>
      <div>
        <input />
        <button>click</button>
      </div>
      <div className="restrolist">
        <Restorentcard restorent={restolist[0]} />
        <Restorentcard restorent={restolist[1]} />
        <Restorentcard restorent={restolist[2]} />
        <Restorentcard restorent={restolist[3]} />
      </div>
    </>
  );
};
export default Body;
