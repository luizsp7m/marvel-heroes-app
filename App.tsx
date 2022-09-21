import { Layout } from "./src/components/Layout";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

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

  return (
    <Layout>
      {fontsLoaded ? <Home /> : <Loading />}
    </Layout>
  );
}