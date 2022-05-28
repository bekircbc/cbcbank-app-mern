import { useContext } from "react";
import { AppContext } from "../AppContext";

export const Home = () => {
  const {
    data,
    currentAccount,
    isLoggedIn,
    setIsLoggedIn,
    currentLogindata,
    setCurrentLogindata,
  } = useContext(AppContext);
  return (
    <>
      <h1>Home</h1>
      {isLoggedIn && (
        <>
          {currentAccount.map((m) => {
            <>
              <h2>Welcome, {m.owner}</h2>
              <div>{m.movements}</div>
              <div>{m.movementsDates}</div>
              <div>{m.currency}</div>
            </>;
          })}
        </>
      )}
    </>
  );
};
