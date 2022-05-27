import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";

export const Login = () => {
  const { data } = useContext(AppContext);

  const idInputRef = useRef();
  const pinInputRef = useRef();
  function isLoggedInHandler(event) {
    event.preventDefault();
    const enteredId = titleInputRef.current.value;
    const enteredPin = imageInputRef.current.value;

    const currentAccount = data.logindata.find(
      (m) => m.id === enteredId && m.pin === enteredPin
    );

    fetch(
      "https://basic-streaming-app-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  return (
    <>
      <h1>Login</h1>
      {isLoggedIn ? (
        <h2>AA</h2>
      ) : (
        <form className="formCard" onSubmit={submitHandler}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />

          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />

          <button className="btnAddMeetup">Add Meetup</button>
        </form>
      )}
    </>
  );
};
