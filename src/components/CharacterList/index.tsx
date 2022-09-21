import { ScrollView } from "react-native";
import { CharacterItem } from "../CharacterItem";
import { styles } from "./styles";

export function CharacterList() {
  return (
    <ScrollView style={styles.container}>
      {Array.from(Array(10)).map((item, index) => (
        <CharacterItem key={index} />
      ))}
    </ScrollView>
  );
}