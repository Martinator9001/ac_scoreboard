import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import App from './App';
import './index.css';
import { debugData } from './utils/debugData';
import { isEnvBrowser } from './utils/misc';

debugData([
  {
    action: 'setVisible',
    data: true,
  },
]);

debugData([
  {
    action: 'setLocales',
    data: {
      group: 'Group',
      count: 'Count',
      name: 'Name',
      id: 'ID',
      player_count: 'Player count',
      your_id: 'Your server ID',
      copied: 'Copied to clipboard!',
    },
  },
]);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);

if (isEnvBrowser()) {
  container!.style.backgroundImage = 'url("https://i.ibb.co/99bfyf3/wEQDXCB.png")';
  container!.style.backgroundSize = 'cover';
  container!.style.backgroundRepeat = 'no-repeat';
  container!.style.backgroundPosition = 'center';
}
