import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { setUser } from "../../features/auth/authSlice";
import { auth } from "../../firebaseConfig";
import { useDispatch } from "react-redux";

export default function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
    });
    return unsubscribe;
  }, []);

  return null;
}
