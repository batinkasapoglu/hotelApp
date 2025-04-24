import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useNavigation } from "@react-navigation/native";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc ,doc,} from "firebase/firestore";
import { db ,auth } from "../../../firebaseConfig";

const formSchema = z
  .object({
    name: z.string().min(1, "Adınızı giriniz"),
    surName: z.string().min(1, "Soyadınızı giriniz"),
    email: z.string().email("Geçerli bir mail adresi giriniz"),
    password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Şifreler eşleşmiyor",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;

export default function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function register(data: FormData) {
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user ;

      await setDoc(doc(db, "users", user.uid), {
        uid:user.uid,
        email:data.email,
        name:data.name,
        surName:data.surName,
        createdAt: new Date(),
      });


      Alert.alert("Başarılı", "Kayıt başarılı", [
        { text: "Tamam", onPress: () => navigation.navigate("Login") },
      ]);
    } catch (error: any) {
      Alert.alert("Hata","Mail Adresi Kayıtlı");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextInput
            placeholder="Adınız"
            style={styles.input}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      {errors.name && (
        <Text style={styles.error}>{errors.name.message}</Text>
      )}

<Controller
        control={control}
        name="surName"
        render={({ field }) => (
          <TextInput
            placeholder="Soyadınızz"
            style={styles.input}
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      {errors.surName && (
        <Text style={styles.error}>{errors.surName.message}</Text>
      )}

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInput
            placeholder="E-Mail"
            style={styles.input}
            value={field.value}
            onChangeText={field.onChange}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInput
            placeholder="Şifre"
            style={styles.input}
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field }) => (
          <TextInput
            placeholder="Şifreyi Tekrar Giriniz"
            style={styles.input}
            secureTextEntry
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      {errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(register)}
      >
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
