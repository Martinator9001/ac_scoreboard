import { Drawer, ScrollArea, Stack, createStyles } from '@mantine/core';
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
    <Drawer.Root
      opened={visible}
      onClose={() => setVisible(false)}
      scrollAreaComponent={(props) => <ScrollArea.Autosize {...props} scrollbarSize={6} />}
      size="xs"
      position="right"
      padding="sm"
    >
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title className={classes.title}>Server Name</Drawer.Title>
        </Drawer.Header>

        <Drawer.Body>
          <Stack spacing={5}>
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </Stack>
        </Drawer.Body>

        <Footer />
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default Scoreboard;
