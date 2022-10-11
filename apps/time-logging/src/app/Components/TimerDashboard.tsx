import { useEffect, useState } from 'react';
import { helpers } from '../helpers';
import { EditableTimersList } from './EditableTimersList';
import { ToggleableTimerForm } from './ToggleableTimerForm';

export type ITimerDescription = {
  id: string;
  title: string;
  project: string;
};

export type ITimer = ITimerDescription & {
  elapsed: number;
  runningSince?: number;
};

const x = setInterval;
export const TimersDashboard = () => {
  const [timers, setTimers] = useState<ITimer[]>([]);

  const startTimer = (timerId: string) => {
    const now = Date.now();

    const newTimer = timers.map((timer) =>
      timer.id === timerId ? { ...timer, runningSince: now } : timer
    );

    setTimers(newTimer);
  };

  const stopTimer = (timerId: string) => {
    const now = Date.now();

    const newTimer = timers.map((timer) => {
      const lastElapsed = now - timer.runningSince!;

      return timer.id === timerId
        ? {
            ...timer,
            runningSince: undefined,
            elapsed: timer.elapsed + lastElapsed,
          }
        : timer;
    });

    setTimers(newTimer);
  };

  const editTimer = (values: ITimerDescription) => {
    const timer = Object.entries(values)
      .filter(([_, v]) => !!v)
      .reduce((timer, [k, v]) => {
        timer[k as keyof ITimerDescription] = v;
        return timer;
      }, {} as ITimerDescription);

    const newTimer = timers.map((t) =>
      t.id === timer.id ? { ...t, ...timer } : t
    );

    setTimers(newTimer);
  };

  const handleFormSubmit = (timer: ITimerDescription) => {
    if (timer.id) editTimer(timer);
    else setTimers([...timers, helpers.newTimer(timer)]);
  };

  const onDeleteTimer = (id: string) => {
    const timer = timers.filter((timer) => timer.id !== id);

    setTimers(timer);
  };

  return (
    <div className="font-sans box-border max-w-container px-4">
      <div className="space-y-2 m-auto w-[350px] mt-2 bg-white shadow-md">
        <h1 className="text-2xl font-semibold text-indigo-700 text-center ">
          Timers
        </h1>
        <hr className="ring-1 ring-gray-300 border-0" />
        <EditableTimersList
          timers={timers}
          onFormSubmit={handleFormSubmit}
          onDeleteSubmit={onDeleteTimer}
          onStartClick={startTimer}
          onStopClick={stopTimer}
        />
        <ToggleableTimerForm onFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};
