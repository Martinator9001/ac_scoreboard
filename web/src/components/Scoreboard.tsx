import { Drawer, Stack, Title } from '@mantine/core';
import { useVisibility } from '../store/visibility';
import Row from './Row';

const Scoreboard: React.FC = () => {
  const [visible, setVisible] = useVisibility((state) => [state.visible, state.setVisible]);

  return (
    <Drawer
      opened={visible}
      onClose={() => setVisible(false)}
      withCloseButton={false}
      size="md"
      position="right"
      padding="sm"
      title={<Title order={3}>Server Name</Title>}
    >
      <Stack spacing={5}>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </Stack>
    </Drawer>
  );
};

export default Scoreboard;
