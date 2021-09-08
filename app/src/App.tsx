import React, { FC } from 'react';
import '../src/assets/scss/reset.scss'
import '../src/assets/scss/styles.scss'
import '../src/assets/scss/variable.scss'
import TimerPage from './components/pages/TimerPage';

const App: FC = () => {
  return (
    <TimerPage />
  );
}

export default App;
