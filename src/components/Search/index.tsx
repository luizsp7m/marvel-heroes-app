import { TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { THEME } from "../../theme";
import { styles } from "./styles";
import { useState } from "react";

interface Props {
  onSearchCharacter: (param: string) => Promise<void>;
}

export function Search({ onSearchCharacter }: Props) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Procure por um personagem"
        placeholderTextColor={THEME.COLORS.TEXT_SECONDARY}
        value={searchInput}
        onChangeText={value => setSearchInput(value)}
      />

      <TouchableOpacity style={styles.button} onPress={() => onSearchCharacter(searchInput)}>
        <FontAwesome
          name="search"
          size={18}
          color={THEME.COLORS.TEXT_SECONDARY}
        />
      </TouchableOpacity>
    </View>
  );
}