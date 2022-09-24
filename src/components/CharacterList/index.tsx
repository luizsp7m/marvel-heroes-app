import { FlatList, Text, View } from "react-native";
import { CharacterItem, CharacterItemProps } from "../CharacterItem";
import { Pagination } from "../Pagination";
import { styles } from "./styles";

interface Props {
  characters: Array<CharacterItemProps>;
  currentPage: number;
  numberPages: number;
  onChangePage: (page: number) => Promise<void>;
}

export function CharacterList({ characters, currentPage, numberPages, onChangePage }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens</Text>
      <Text style={styles.subtitle}>Página {currentPage} de {numberPages}</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.list}
        data={characters}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CharacterItem character={item} />
        )}

        ItemSeparatorComponent={() => <View style={{
          marginHorizontal: 10,
        }} />}
        
        ListFooterComponent={
          <Pagination
            currentPage={currentPage}
            numberPages={numberPages}
            onChangePage={onChangePage}
          />
        }
      />
    </View>
  );
}