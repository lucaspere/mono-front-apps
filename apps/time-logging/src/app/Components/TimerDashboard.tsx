import { nanoid } from 'nanoid';
import { useState } from 'react';
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

export const TimersDashboard = () => {
  const [timers, setTimers] = useState<ITimer[]>([
    {
      title: 'Practice squat',
      project: 'Gym Chores',
      id: nanoid(),
      elapsed: 5456099,
      runningSince: Date.now(),
    },
    {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: nanoid(),
      elapsed: 1273998,
    },
  ]);

  const handleFormSubmit = (timer: ITimer) => {
    const t: ITimer = !timer.id ? helpers.newTimer(timer) : (timer as ITimer);
    setTimers([...timers, t]);
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
          onFormSubmit={() => handleFormSubmit}
        />
        <ToggleableTimerForm onFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};
