import { createElement } from 'react';
import { Group, MantineColor, Tooltip, createStyles } from '@mantine/core';
import { IconType } from 'react-icons';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.gray[8],
    color: theme.white,
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    height: '1.625rem',
    borderRadius: theme.radius.sm,
  },
  text: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
  },
}));

type Props = {
  label: string;
  color?: MantineColor;
  icon: IconType;
  iconSize: number;
  text: string;
  onClick?: () => void;
};

const Indicator: React.FC<Props> = (props) => {
  const { classes } = useStyles();

  return (
    <Tooltip label={props.label} withArrow position="top" color={props.color ?? 'gray'}>
      <Group spacing={10} className={classes.container} onClick={props.onClick}>
        {createElement(props.icon, { size: props.iconSize })}
        <span className={classes.text}>{props.text}</span>
      </Group>
    </Tooltip>
  );
};

export default Indicator;
