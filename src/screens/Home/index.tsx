import { useEffect, useState } from "react";
import { View } from "react-native";
import { CharacterList } from "../../components/CharacterList";
import { Search } from "../../components/Search";
import { api } from "../../lib/api";

export function Home() {
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
    await api.get("/characters").then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View>
      <Search />
      <CharacterList />
    </View>
  );
}