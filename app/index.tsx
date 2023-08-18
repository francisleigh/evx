import { Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Page() {
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
  );
}
