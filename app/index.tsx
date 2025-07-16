import { View } from "react-native";
import { useRouter } from 'expo-router';

import Button from './components/button';

const Home = () => {
  const router = useRouter()
  
	const handleStartPress = () => {
		// push('/photo')	
    router.push("/photo")
	}
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#331E54"
      }}
    >
      <Button
				text='Começar'
				onPress={handleStartPress}
			/>
    </View>
  );
}

export default Home
