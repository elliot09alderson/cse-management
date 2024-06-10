import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const { isLoggedIn, role } = useSelector((state) => state.auth);

  return (
    <div className="bg-black/80 h-screen center-row w-[100vw]">
      AdminLogin
      {`user login ${isLoggedIn} `}
      <Link to={"/"} className="text-blue-500 underline font-seminbold">
        go to home
      </Link>
    </div>
  );
};

export default AdminLogin;
