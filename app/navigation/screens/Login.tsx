import { View, Text, Button, TextInput, StyleSheet, Alert } from "react-native";
import React from "react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { zodResolver } from "@hookform/resolvers/zod";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebaseConfig";

const loginSchema = z.object({
  email: z.string().email("Geçerli bir mail adresi giriniz"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function registerAndLogin(data: LoginSchema) {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      Alert.alert("Başarılı", "Giriş başarılı", [
        { text: "Tamam", },
      ]);
    } catch (error: any) {
      Alert.alert("Hata", "E-mail veya şifre hatalı");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="E-posta"
              keyboardType="email-address"
              autoCapitalize="none"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
            {errors.email && (
              <Text style={styles.error}>{errors.email.message}</Text>
            )}
          </View>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password.message}</Text>
            )}
          </View>
        )}
      />

      <Button title="Giriş Yap" onPress={handleSubmit(registerAndLogin)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});
