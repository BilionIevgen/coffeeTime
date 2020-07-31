import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsAdmin } from "../../../redux/actions/auth";

export default function LoginButton() {
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(setIsAdmin());
  };
  return (
    <div onClick={onButtonClick} className="login-button">
      {isAdmin ? (
        <button style={{ backgroundColor: "blue", color: "white" }}>
          LogOut
        </button>
      ) : (
        <button>Log In</button>
      )}
    </div>
  );
}
