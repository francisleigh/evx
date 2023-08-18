import Text from "../../../components/Text";
import { useLocalSearchParams, usePathname } from "expo-router";

export const unstable_settings = {
  // Used for `(manage)`
  initialRouteName: "first",
  // Used for `(preview)`
  preview: {
    initialRouteName: "second",
  },
};

const Page = () => {
  const pathname = usePathname();
  const localSearchParams = useLocalSearchParams();

  return (
    <Text>
      {pathname} : {localSearchParams.eventID}
    </Text>
  );
};

export default Page;
