import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../theme";

export interface CharacterItemProps {
  id: string;
  name: string;
  thumbnail: {
    path: string;
  };
}

interface Props {
  character: CharacterItemProps;
}

export function CharacterItem({ character }: Props) {
  const imageUrl = `${character.thumbnail.path}/portrait_incredible.jpg`;

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: imageUrl,
        }}
      >
        <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
          <Text numberOfLines={1} style={styles.text}>{character.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}