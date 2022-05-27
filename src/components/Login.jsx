import { useContext } from "react";
import { AppContext } from "../AppContext";
// import Forms from "react-forms";

export const Login = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <h1>Login</h1>
      {data.accounts.map((m) => {
        return (
          <>
            <p>{m.movements}</p>
          </>
        );
      })}
    </>
  );
};
