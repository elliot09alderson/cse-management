import { useSelector } from "react-redux";

const UserLogin = () => {
  const data = useSelector((state) => state.counter.couples);

  return (
    <div className="bg-black/80 h-screen center-row w-[100vw]">
      UserLogin
      <p></p>
    </div>
  );
};

export default UserLogin;
