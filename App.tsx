import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";
import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  if (!fontsLoaded) {
    return <Loading />
  }
  
  return (
    <Fragment>
      <StatusBar style="light" translucent />
      <Home />
    </Fragment>
  );
}