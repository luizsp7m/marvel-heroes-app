import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { THEME } from "../../theme";
import { styles } from "./styles";
import { useState } from "react";

export function Search() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchCharacter() {
    alert(searchInput);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Procure por um personagem"
        placeholderTextColor={THEME.COLORS.TEXT_300}
        value={searchInput}
        onChangeText={value => setSearchInput(value)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearchCharacter}>
        <FontAwesome
          name="search"
          size={18}
          color={THEME.COLORS.TEXT_300}
        />
      </TouchableOpacity>
    </View>
  );
}