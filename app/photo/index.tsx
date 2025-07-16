import { useRouter } from 'expo-router';

import Button from '../components/button';
import PageContainer from '../components/pageContainer';
import Paragraph from '../components/paragraph';

const Photo = () => {
  const router = useRouter()

  const handleSend = () => {
    router.push("/result")
  }
  
  return (
    <PageContainer pageNumber={2}>
      <Paragraph>Envie sua Foto</Paragraph>

      <Button
        text='Enviar Photo'
        onPress={handleSend}
      />
    </PageContainer>
  );
}

export default Photo
