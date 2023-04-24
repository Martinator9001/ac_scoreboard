import { CopyButton, Group, createStyles } from '@mantine/core';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import Indicator from './Indicator';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    position: 'sticky',
    bottom: 0,
    zIndex: 1000,
    padding: theme.spacing.xs,
  },
}));

const temp: any = {
  playerCount: 36,
  maxPlayers: 100,
  playerId: 6,

  locales: {
    playerCount: 'Player count',
    playerId: 'Your server ID',
    copied: 'Copied to clipboard!',
  },
};

const Footer: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Group spacing="xs" className={classes.container}>
      <Indicator
        label={temp.locales.playerCount}
        icon={FaUserFriends}
        iconSize={18}
        text={`${temp.playerCount} / ${temp.maxPlayers}`}
      />

      <CopyButton value={temp.playerId} timeout={2000}>
        {({ copied, copy }) => (
          <Indicator
            label={copied ? temp.locales.copied : temp.locales.playerId}
            color={copied ? 'green' : 'gray'}
            icon={FaUserAlt}
            iconSize={13}
            text={temp.playerId}
            onClick={copy}
          />
        )}
      </CopyButton>
    </Group>
  );
};

export default Footer;
