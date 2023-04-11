import { Button, CopyButton, Group, Tooltip } from '@mantine/core';
import { FaCheck, FaUserAlt, FaUserFriends } from 'react-icons/fa';

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
      <Tooltip label={temp.locales.playerCount} withArrow position="top" color="gray">
        <Button compact leftIcon={<FaUserFriends size={18} />} color="gray">
          {temp.playerCount} / {temp.maxPlayers}
        </Button>
      </Tooltip>

      <CopyButton value={temp.playerId} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip
            label={copied ? temp.locales.copied : temp.locales.playerId}
            withArrow
            position="top"
            color={copied ? 'green' : 'gray'}
          >
            <Button onClick={copy} compact leftIcon={<FaUserAlt size={13} />} color="gray">
              {temp.playerId}
            </Button>
          </Tooltip>
        )}
      </CopyButton>
    </Group>
  );
};

export default Footer;
