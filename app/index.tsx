import { Text, View } from "react-native";

import Loading from './components/loading';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading />
    </View>
  );
}
