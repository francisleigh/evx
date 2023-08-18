import { sWidth } from "./layout";
import { Platform } from "react-native";

const _100 = sWidth * 0.25464;
const isWeb = Platform.OS === "web";
const spacing = {
  space100: _100,
  space90: _100 * 0.9,
  space80: _100 * 0.8,
  space70: _100 * 0.7,
  space60: _100 * 0.6,
  space50: _100 * 0.5,
  space40: _100 * 0.4,
  space30: _100 * 0.3,
  space20: _100 * 0.2,
  space15: _100 * 0.15,
  space10: _100 * 0.1,
  space9: _100 * 0.09,
  space8: _100 * 0.08,
  space7: _100 * 0.07,
  space6: _100 * 0.06,
  space5: _100 * 0.05,
} as const;

export default spacing;

export const GUTTER = isWeb
  ? Math.min(spacing.space20, 19.8619)
  : spacing.space20;
