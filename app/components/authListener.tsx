import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setUser } from "../../features/slices/authSlice";
import { auth } from "../../firebaseConfig";
import { useDispatch } from "react-redux";
import { fetchUserData } from "./userThunk";
import { AppDispatch } from "../store";

export default function AuthListener() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(user) => {
      if (user) {
        const simpleUser = {
          uid: user.uid,
          email: user.email,
          name: null,
          surName: null,
          displayName: user.displayName,
          photoURL: user.photoURL,
        };
        dispatch(setUser(simpleUser));
        dispatch(fetchUserData(user.uid));
      } else {
        dispatch(setUser(null));
      }
    });
    return unsubscribe;
  }, []);

  return null;
}
