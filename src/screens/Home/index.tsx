import { useEffect, useState, Fragment } from "react";
import { ScrollView } from "react-native";
import { CharacterItemProps } from "../../components/CharacterItem";
import { CharacterList } from "../../components/CharacterList";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pagination } from "../../components/Pagination";
import { Search } from "../../components/Search";
import { api } from "../../lib/api";
import { styles } from "./styles";
import { Loading } from "../../components/Loading";
import { Header } from "../../components/Header";

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
    characters: response.data.data.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        thumbnail: {
          path: character.thumbnail.path,
        }
      }
    }),
  }
}

async function search(page: number = 1, searchParam: string) {
  const response = await api.get<CharactersResponse>("/characters", {
    params: {
      offset: (OFFSET * page) - LIMIT,
      nameStartsWith: searchParam,
    }
  });

  return {
    currentPage: Math.ceil((response.data.data.offset / LIMIT) + 1),
    numberPages: Math.ceil(response.data.data.total / LIMIT),
    total: response.data.data.total,
    characters: response.data.data.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        thumbnail: {
          path: character.thumbnail.path,
        }
      }
    }),
  }
}

export function Home() {
  const [characters, setCharacters] = useState<CharacterItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberPages, setNumberPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [searchParam, setSearchParam] = useState("");

  async function onChangePage(page: number) {
    setLoading(true);

    if (searchParam) {
      search(page, searchParam).then(response => {
        setCharacters(response.characters);
        setCurrentPage(response.currentPage);
        setNumberPages(response.numberPages);
        setLoading(false);
      });

      return;
    }

    getCharacters(page).then(response => {
      setCharacters(response.characters);
      setCurrentPage(response.currentPage);
      setNumberPages(response.numberPages);
      setLoading(false);
    });
  }

  async function onSearchCharacter(param: string) {
    setLoading(true);

    if (param.trim() === "") {
      getCharacters().then(response => {
        setTitle("");
        setSearchParam("");
        setCharacters(response.characters);
        setCurrentPage(response.currentPage);
        setNumberPages(response.numberPages);
        setLoading(false);
      });

      return;
    }

    search(1, param).then(response => {
      setSearchParam(param);
      setTitle(`${response.total} resultado(s) encontrados para ${param}`);
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
      setSearchParam("");
      setTitle("");
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <Search onSearchCharacter={onSearchCharacter} />

        {loading ? <Loading /> : (
          <Fragment>
            <CharacterList
              characters={characters}
              currentPage={currentPage}
              numberPages={numberPages}
              title={title}
            />

            {numberPages > 0 && (
              <Pagination
                currentPage={currentPage}
                numberPages={numberPages}
                onChangePage={onChangePage}
              />
            )}
          </Fragment>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}