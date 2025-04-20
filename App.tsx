import { Provider } from "react-redux";
import MainNavigator from "./app/navigation/MainNavigator";
import "./global.css";
import { store } from "./app/store";
import AuthListener from "./app/components/authListener";

export default function App() {
  return (
    <Provider store={store}>
      <AuthListener/>
      <MainNavigator />
    </Provider>
  );
}
