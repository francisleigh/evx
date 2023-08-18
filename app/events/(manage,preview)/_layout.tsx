import { Slot } from "expo-router";

export default function DynamicLayout({ segment }) {
  console.log("segment", segment);

  return <Slot />;
}
