import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { CharacterItemProps } from "../../components/CharacterItem";
import { CharacterList } from "../../components/CharacterList";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";
import { api } from "../../lib/api";
import { THEME } from "../../theme";
import { styles } from "./styles";
import { Loading } from "../../components/Loading";

const OFFSET = 20;
const LIMIT = 20;

interface CharactersResponse {
  data: {
    offset: number;
    total: number;
    results: Array<CharacterItemProps>;
  }
}

async function getCharacters(page: number = 1) {
  const response = await api.get<CharactersResponse>("/characters", {
    params: {
      offset: (OFFSET * page) - LIMIT,
    }
  });

  return {
    currentPage: Math.ceil((response.data.data.offset / LIMIT) + 1),
    numberPages: Math.ceil(response.data.data.total / LIMIT),
    characters: response.data.data.results,
  }
}

export function Home() {
  const [characters, setCharacters] = useState<CharacterItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberPages, setNumberPages] = useState(0);
  const [loading, setLoading] = useState(true);

  async function onChangePage(page: number) {
    setLoading(true);

    getCharacters(page).then(response => {
      setCharacters(response.characters);
      setCurrentPage(response.currentPage);
      setNumberPages(response.numberPages);
      setLoading(false);
    });
  }

  useEffect(() => {
    setLoading(true);

    getCharacters().then(response => {
      setCharacters(response.characters);
      setCurrentPage(response.currentPage);
      setNumberPages(response.numberPages);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Search />

      {loading ? (
        <Loading />
      ) : (
        <CharacterList
          characters={characters}
          currentPage={currentPage}
          numberPages={numberPages}
          onChangePage={onChangePage}
        />
      )}
    </SafeAreaView>
  );
}