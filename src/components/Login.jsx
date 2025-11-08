import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkUserInput } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AVTAR_LOGO } from "../utils/constants";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUpToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  function handleButtonClick() {
    //validate the data

    const isValidData = checkUserInput(
      email.current.value,
      password.current.value
    );
    if (!isValidData.isValid) {
      setErrorMessage(isValidData.message);
      return;
    }
    setErrorMessage("");
    if (!isSignInForm) {
      //signing up the new user

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //user we need to update the displayname

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVTAR_LOGO,
          })
            .then(() => {
              // Profile updated!

              const { uid, email, displayName, photoURL } = auth.currentUser;
              //now we want to store this info in the store so we are dispatching the action from here
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              navigate("/browse");
              // ...
            })
            .catch((error) => {
              // An error occurred
              navigate("/");
              // ...
            });

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          const { uid, email, displayName, photoURL } = user;
          //now we want to store this info in the store so we are dispatching the action from here
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute top-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_small.jpg"
          alt="Banner"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="  w-3/12 absolute p-12 bg-black text-white mx-auto right-0 left-0 bg-opacity-80 my-auto"
      >
        <h1 className="text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-800"
            type="text"
            placeholder="Enter Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-800"
          type="text"
          placeholder="Enter Email Id"
        />
        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 text-lg py-3">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignUpToggle}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already have account! Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
