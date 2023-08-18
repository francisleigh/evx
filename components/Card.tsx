import { StyleSheet, Pressable, StyleProp, PressableProps } from "react-native";

import colors from "../constants/colors";
import { GUTTER } from "../constants/spacing";

type Props = PressableProps & { bg?: keyof typeof colors };
const Card = ({ bg, style, ...props }: Props) => {
  return (
    <Pressable
      {...props}
      style={[styles.card, !!bg && styles[bg], !!style && style]}
    />
  );
};

const bgVariants: { [key in keyof typeof colors]: StyleProp<any> } = {
  text: {},
  background: {
    backgroundColor: colors.background,
  },
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: GUTTER / 2,
    borderColor: colors.text,
    padding: GUTTER,
    borderRadius: GUTTER / 2,
    gap: GUTTER,
  },
  ...bgVariants,
});

export default Card;
