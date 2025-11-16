import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
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
      } else {
        // User is signed out
        // remove from the store and redirect to the login page
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unscubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. // redirect to the login page
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" relative px-10 py-4 bg-gradient-to-b from-black z-10  flex justify-between">
      <img className=" w-56" src={LOGO} alt="logo" />
      {userData && (
        <div className="flex  p-5 gap-2">
          <img src={userData.photoURL} className="w-12 h-12" alt="user-icon" />
          <button className="text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
