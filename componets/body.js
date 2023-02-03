const Body = () => {
  var cuurettime = new Date();
  let time = cuurettime.getHours(); // the formet of time is 24 hours//
  let greeting = "";
  let name = "Hello sir ";
  let sudarta = {};
  if (time >= 1 && time <= 11) {
    greeting = "good morning";
    sudarta = {
      color: "orange",
    };
  } else if (time > 11 && time <= 19) {
    greeting = "good afternoon";
    sudarta = {
      color: "green",
    };
  } else if (time > 19 && time <= 24) {
    greeting = "good night";
    sudarta = {
      color: "red",
    };
  }

  return (
    <>
      <h1>
        {name} <span style={sudarta}>{greeting}</span>
      </h1>
    </>
  );
};
export default Body;
