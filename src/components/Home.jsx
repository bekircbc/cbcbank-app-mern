import { useContext } from "react";
import { AppContext } from "../AppContext";

export const Home = () => {
  const { data, isLoggedIn, currentAccount } = useContext(AppContext);
  return (
    <>
      <h1>Home</h1>
      {isLoggedIn ? (
        <>
          <div>Welcome, {currentAccount.owner}</div>
        </>
      ) : (
        <>
          {data.werbung.map((m) => {
            return (
              <div>
                <img src={m.url} alt={m.name} />
                <h2>{m.name}</h2>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
