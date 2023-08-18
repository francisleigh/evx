import { useWindowDimensions } from "react-native";

type RTN = {
  viewport: "mobile" | "tablet" | "desktop";
  width: number;
  height: number;
};
const useWindow = (): RTN => {
  const { height, width } = useWindowDimensions();

  let viewport: RTN["viewport"] = "desktop";
  if (width <= 800) viewport = "mobile";
  else if (width <= 1200) viewport = "tablet";

  return {
    viewport,

    width,
    height,
  };
};

export default useWindow;
