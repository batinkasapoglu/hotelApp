// userThunk.ts
import { doc, getDoc } from "firebase/firestore";
import { AppDispatch } from "../store";
import { db } from "../../firebaseConfig";
import { updateUserDetails } from "../../features/slices/authSlice";

// 🔁 GÜNCELLENMİŞ thunk yapısı
export const fetchUserData = (uid: string) => async (dispatch: AppDispatch) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Firestore'dan gelen veri:", data);
        dispatch(
          updateUserDetails({
            uid,
            email: data.email,
            name: data.name,
            surName: data.surName,
          })
        );
      } else {
        console.warn("Kullanıcı bulunamadı.");
      }
    } catch (error) {
      console.error("Kullanıcı verisi alınamadı:", error);
    }
  };
  
