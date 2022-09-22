import { FlatList, Text, View } from "react-native";
import { CharacterItem, CharacterItemProps } from "../CharacterItem";
import { styles } from "./styles";

interface Props {
  characters: Array<CharacterItemProps>;
  currentPage: number;
  numberPages: number;
}

export function CharacterList({ characters, currentPage, numberPages }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens</Text>
      <Text style={styles.subtitle}>Página {currentPage} de {numberPages}</Text>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={characters}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CharacterItem character={item} />
        )}
        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 6,
        }} />}
      />
    </View>
  );
}