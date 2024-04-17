import { FC } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { PauseIcon } from '../../../shared/UI/icons';

import styles from './Timer.module.css';

interface TimerProps {
  duration: number;
  totalSeconds: number;
  isPlaying: boolean;
  endCallback: () => void;
  resetKey?: number;
}

const Timer: FC<TimerProps> = ({ duration, isPlaying, totalSeconds, endCallback, resetKey }) => {
  return (
    <div className={styles.root}>
      <CountdownCircleTimer
        key={resetKey ?? 0}
        isPlaying={isPlaying}
        duration={duration}
        colors={'#28bc37'}
        onComplete={() => {
          endCallback();
          return { shouldRepeat: false, delay: 0.5 };
        }}
        updateInterval={1}
        size={200}
        strokeWidth={5}
        children={({ remainingTime }) => {
          return (
            <div className={styles.wrapper}>
              {!isPlaying && <PauseIcon />}
              <div className={styles.time}>
                {`${Math.floor(remainingTime / 60)}:${
                  remainingTime % 60 < 10 ? '0' + (remainingTime % 60) : remainingTime % 60
                }`}
              </div>
              <div className={styles.totalTime}>{totalSeconds}:00</div>
            </div>
          );
        }}></CountdownCircleTimer>
    </div>
  );
};

export default Timer;
