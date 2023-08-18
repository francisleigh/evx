import { sWidth } from "./layout";
import { Platform } from "react-native";

const isWeb = Platform.OS === "web";

const base_design_width_px = isWeb ? 1080 : 360;

const base_px_to_pt = Math.round(base_design_width_px / 1.25);

const h1 = isWeb
  ? sWidth * (44 / base_px_to_pt)
  : sWidth * (48 / base_px_to_pt);
const h2 = isWeb
  ? sWidth * (30 / base_px_to_pt)
  : sWidth * (34 / base_px_to_pt);
const body = isWeb
  ? sWidth * (15 / base_px_to_pt)
  : sWidth * (19 / base_px_to_pt);
const link = isWeb
  ? sWidth * (11 / base_px_to_pt)
  : sWidth * (15 / base_px_to_pt);

export const fontSizes = {
  h1,
  h2,
  body,
  link,

  menuHeading: isWeb ? Math.max(h1 * 0.2, 59.5833) : h1,
  menuSubheading: isWeb ? Math.max(h2 * 0.2, 40.625) : h2,
  menuBody: isWeb ? Math.max(body * 0.2, 20.3125) : body,
};

export const fontWeights = {
  medium: "helvetica-neue-medium",
  light: "helvetica-neue-light",
  regular: "helvetica-neue-regular",
  bold: "helvetica-neue-bold",
};
