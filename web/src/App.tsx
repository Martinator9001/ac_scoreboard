import { useEffect } from 'react';
import { useNuiEvent } from './hooks/useNuiEvent';
import { useExitListener } from './hooks/useExitListener';
import { useVisibility } from './store/visibility';
import { useLocales } from './store/locales';
import { fetchNui } from './utils/fetchNui';
import { isEnvBrowser } from './utils/misc';
import Scoreboard from './components/Scoreboard';
import { Button } from '@mantine/core';

const App: React.FC = () => {
  const [visible, setVisible] = useVisibility((state) => [state.visible, state.setVisible]);
  const [setLocales] = useLocales((state) => [state.setLocales]);

  useNuiEvent('setVisible', setVisible);

  useEffect(() => {
    if (isEnvBrowser()) return;
    fetchNui('loadLocales');
  }, []);

  useNuiEvent('setLocales', setLocales);

  useExitListener(setVisible);

  return (
    <>
      {isEnvBrowser() && <Button onClick={() => setVisible(true)}>Open</Button>}
      <div hidden={!visible}>
        <Scoreboard />
      </div>
    </>
  );
};

export default App;
