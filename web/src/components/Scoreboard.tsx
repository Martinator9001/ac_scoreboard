import { Drawer, Stack, Title } from '@mantine/core';
import { useVisibility } from '../store/visibility';
import Row from './Row';
import Footer from './Footer';

const Scoreboard: React.FC = () => {
  const [visible, setVisible] = useVisibility((state) => [state.visible, state.setVisible]);

  return (
    <Drawer
      opened={visible}
      onClose={() => setVisible(false)}
      withCloseButton={false}
      size="xs"
      position="right"
      padding="sm"
      title={<Title order={3}>Server Name</Title>}
    >
      <Stack align="center">
        <Stack spacing={5}>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </Stack>

        <Footer />
      </Stack>
    </Drawer>
  );
};

export default Scoreboard;
