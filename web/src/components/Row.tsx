import { Group, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  badge: {
    backgroundColor: theme.colors.gray[9],
    height: '20px',
    padding: '0 10px',
    borderRadius: theme.radius.xs,
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
    lineHeight: '18px',
  },
}));

const Row: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Group bg="dark.8" p={5} position="apart" spacing={0} noWrap>
      <Text lineClamp={1} weight={600}>
        ANTOND. 4ds65 4g5e s64 g65 es4 g6 s4e 65g4
      </Text>
      <span className={classes.badge}>6</span>
    </Group>
  );
};

export default Row;
