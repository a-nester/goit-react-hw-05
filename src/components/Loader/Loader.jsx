import { Bars } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{ placeContent: "center" }}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default Loader;
