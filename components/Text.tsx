import { Text as RNText, StyleSheet, TextProps, TextStyle } from "react-native";
import { fontSizes } from "../constants/typography";
import colors from "../constants/colors";

type TextVariants = "h1" | "h2" | "body" | "link";
type Props = TextProps & { variant?: TextVariants };

const Text = ({ variant = "body", style, ...props }: Props) => {
  return <RNText {...props} style={[styles.text, styles[variant], style]} />;
};

const variantStyles: { [key in TextVariants]: TextStyle } = {
  h1: {
    fontSize: fontSizes.h1,
  },
  body: {
    fontSize: fontSizes.body,
  },
  h2: {
    fontSize: fontSizes.h2,
  },
  link: {
    fontSize: fontSizes.link,
  },
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
  ...variantStyles,
});

export default Text;
