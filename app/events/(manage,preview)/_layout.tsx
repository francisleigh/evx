import { Slot } from "expo-router";

export default function DynamicLayout({ segment }) {
  console.log("El sego:", segment);

  return <Slot />;
}
