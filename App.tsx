import {Provider } from "react-redux";
import MainNavigator from "./app/navigation/MainNavigator";
import "./global.css";
import { store } from "./app/store";

export default function App() {

  
  return (
   <Provider store={store}>
      <MainNavigator />
      </Provider>
  );
}
