import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setUser } from "../../features/auth/authSlice";
import { auth } from "../../firebaseConfig";
import { useDispatch } from "react-redux";

export default function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const simpleUser = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(setUser(simpleUser));
      } else {
        dispatch(setUser(null));
      }
    });
    return unsubscribe;
  }, []);

  return null;
}
