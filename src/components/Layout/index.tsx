import { styles } from "./styles";
import { StatusBar, View } from "react-native";
import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View>
        {children}
      </View>
    </SafeAreaView>
  );
}