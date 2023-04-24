import { CopyButton, Group } from '@mantine/core';
import { FaUserAlt, FaUserFriends } from 'react-icons/fa';
import Indicator from './Indicator';

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
  return (
    <Group spacing="xs">
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
