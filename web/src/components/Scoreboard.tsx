import { Drawer, Stack, createStyles } from '@mantine/core';
import { useVisibility } from '../store/visibility';
import Row from './Row';
import Footer from './footer';

const useStyles = createStyles({
  title: {
    fontSize: '1.375rem',
    fontWeight: 700,
    lineHeight: 1.4,
  },
});

const Scoreboard: React.FC = () => {
  const { classes } = useStyles();
  const [visible, setVisible] = useVisibility((state) => [state.visible, state.setVisible]);

  return (
    <Drawer
      classNames={{ title: classes.title }}
      opened={visible}
      onClose={() => setVisible(false)}
      withCloseButton={false}
      size="xs"
      position="right"
      padding="sm"
      title="Server Name"
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
