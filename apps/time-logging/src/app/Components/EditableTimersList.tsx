import { FC } from 'react';
import { EditableTimer } from './EditableTimer';
import { ITimer } from './TimerDashboard';

type EditableTimersListProps = {
  timers: ITimer[];
  onFormSubmit: (timer: ITimer) => void;
  onDeleteSubmit: (id: string) => void;
  onStartClick: (id: string) => void;
  onStopClick: (id: string) => void;
};

export const EditableTimersList: FC<EditableTimersListProps> = (props) => {
  const timers = props.timers.map((timer) => (
    <EditableTimer
      onFormSubmit={props.onFormSubmit}
      onDeleteSubmit={props.onDeleteSubmit}
      key={timer.id}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
      onStartClick={props.onStartClick}
      onStopClick={props.onStopClick}
    />
  ));

  return (
    <section id="timers" className="flex flex-col justify-between space-y-4">
      {timers}
    </section>
  );
};
