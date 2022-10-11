interface TimerActionButtonProps {
  timerIsRunning: boolean;
  onStopClick: () => void;
  onStartClick: () => void;
}

export const TimerActionButton = (props: TimerActionButtonProps) => {
  const style = `flex justify-center items-center h-[40px] border-green-500 border-t-2 text-${
    props.timerIsRunning ? 'red' : 'green'
  }-600 text-xl cursor-pointer`;

  const Start = (
    <p className={style} onClick={props.onStartClick}>
      Start
    </p>
  );

  const Stop = (
    <p className={style} onClick={props.onStopClick}>
      Stop
    </p>
  );

  return props.timerIsRunning ? Stop : Start;
};
