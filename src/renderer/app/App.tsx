import React from 'react';
import { UpdateSessionPerDay } from '../features/UpdateSessionPerDay';
import { UpdateRestTime } from '../features/UpdateRestTime';
import { useSettingsStore } from '../entities/Settings';

import './styles/global.css';

const App = () => {
  const sessionPerDay = useSettingsStore((state) => state.sessionPerDay);

  return (
    <>
      <UpdateSessionPerDay />
      <div>{sessionPerDay}</div>
    </>
  );
};

export default App;
