import Text from "../components/Text";
import Card from "../components/Card";
import { Button, View } from "react-native";
import { GUTTER } from "../constants/spacing";
import useWindow from "../hooks/useWindow";
import { Link, useRouter } from "expo-router";

export default function Page() {
  const { viewport } = useWindow();
  const router = useRouter();
  return (
    <>
      <Link href="/events/(manage)/1234">I don't work</Link>
      <Button
        title="I don't work"
        onPress={() => router.push("/events/(manage)/1234")}
      />

      <Link href="/events/1234">I work but am confused...</Link>
      <Button
        title="I work but am confused..."
        onPress={() => router.push("/events/1234")}
      />
    </>

    // <>
    //   <View
    //     style={[
    //       viewport !== "mobile" && { flexDirection: "row" },
    //       { gap: GUTTER },
    //     ]}
    //   >
    //     <Card bg={"background"}>
    //       <Text variant={"h1"}>{viewport}</Text>
    //       <Text variant={"h2"}>Home page!</Text>
    //       <Text>Home page!</Text>
    //       <Text variant={"link"}>Home page!</Text>
    //     </Card>
    //
    //     <Card bg={"background"}>
    //       <Text variant={"h1"}>{viewport}</Text>
    //       <Text variant={"h2"}>Home page!</Text>
    //       <Text>Home page!</Text>
    //       <Text variant={"link"}>Home page!</Text>
    //     </Card>
    //   </View>
    //
    //   <View
    //     style={[
    //       viewport !== "mobile" && { flexDirection: "row" },
    //       { gap: GUTTER },
    //     ]}
    //   >
    //     <Button
    //       onPress={() => router.push("/events/(manage)/1234")}
    //       title={"events/(manage)/1234"}
    //     />
    //   </View>
    // </>
  );
}
