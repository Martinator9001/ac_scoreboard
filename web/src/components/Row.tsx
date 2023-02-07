import { Badge, Group, Text } from '@mantine/core';

const Row: React.FC = () => {
  return (
    <Group bg="dark.8" p={5} position="apart" spacing={0} noWrap>
      <Text lineClamp={1} weight={600}>
        ANTOND. 4ds65 4g5e s64 g65 es4 g6 s4e 65g4
      </Text>
      <Badge color="gray" radius="xs" size="md">
        6
      </Badge>
    </Group>
  );
};

export default Row;
