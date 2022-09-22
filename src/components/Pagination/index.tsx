import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../theme";

interface Props {
  currentPage: number;
  numberPages: number;
  onChangePage: (page: number) => Promise<void>;
}

export function Pagination({ currentPage, numberPages, onChangePage }: Props) {
  const previousButtonDisabled = currentPage - 1 < 1;
  const nextButtonDisabled = currentPage + 1 > numberPages;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onChangePage(1)}
        disabled={currentPage <= 1}
        style={currentPage < 1 && styles.disabled}
      >
        <AntDesign
          name="banckward"
          size={14}
          color={THEME.COLORS.TEXT_300}
          style={currentPage <= 1 && styles.disabled}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, previousButtonDisabled && styles.disabled]}
        onPress={() => onChangePage(currentPage - 1)}
        disabled={currentPage - 1 < 1}
      >
        <Text style={styles.buttonText}>Anterior</Text>
      </TouchableOpacity>

      <Text style={styles.currentPage}>{currentPage} de {numberPages}</Text>

      <TouchableOpacity
        style={[styles.button, nextButtonDisabled && styles.disabled]}
        onPress={() => onChangePage(currentPage + 1)}
        disabled={currentPage + 1 > numberPages}
      >
        <Text style={styles.buttonText}>Próxima</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onChangePage(numberPages)}
        disabled={currentPage >= numberPages}
      >
        <AntDesign
          name="forward"
          size={14}
          color={THEME.COLORS.TEXT_300}
          style={currentPage >= numberPages && styles.disabled}
        />
      </TouchableOpacity>
    </View>
  );
}