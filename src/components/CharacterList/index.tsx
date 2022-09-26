import { FlatList, ScrollView, Text, View } from "react-native";
import { CharacterItem, CharacterItemProps } from "../CharacterItem";
import { Pagination } from "../Pagination";
import { styles } from "./styles";

interface Props {
  characters: Array<CharacterItemProps>;
  currentPage: number;
  numberPages: number;
  title: string;
}

export function CharacterList({ characters, currentPage, numberPages, title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens</Text>
      { numberPages > 0 && <Text style={styles.subtitle}>Página {currentPage} de {numberPages}</Text> }
      
      { title && <Text style={styles.subtitle}>{title}</Text> }

      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
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
        />
      </ScrollView>
    </View>
  );
}