import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";
import { Home } from "./Home";

export const Login = () => {
  const {
    data,
    setCurrentAccount,
    isLoggedIn,
    setIsLoggedIn,
    currentLogindata,
    setCurrentLogindata,
    isLoggedInHandler,
    idInputRef,
    pinInputRef,
  } = useContext(AppContext);

  return (
    <>
      <h1>Login</h1>

      {isLoggedIn ? (
        <Home />
      ) : (
        <form className="formCard">
          <label htmlFor="id">User Id</label>
          <input type="text" required id="id" ref={idInputRef} />

          <label htmlFor="pin">Pin</label>
          <input type="number" required id="pin" ref={pinInputRef} />

          <button className="btnLogin" onClick={isLoggedInHandler}>
            Login
          </button>
        </form>
      )}
    </>
  );
};
