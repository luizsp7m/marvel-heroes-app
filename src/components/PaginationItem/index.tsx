import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  page: number;
}

export function PaginationItem({ page, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.text}>{page}</Text>
    </TouchableOpacity>
  );
}