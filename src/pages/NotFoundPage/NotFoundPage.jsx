import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <p>404</p>
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default NotFoundPage;
