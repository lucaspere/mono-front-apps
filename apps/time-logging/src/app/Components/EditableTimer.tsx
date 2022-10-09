import { FC, useState } from 'react';
import { TimerForm } from './TimeForm';
import { Timer } from './Timer';
import { ITimer } from './TimerDashboard';

type EditableTimerProps = ITimer & {
  onFormSubmit: (timer: ITimer) => void;
};

export const EditableTimer: FC<EditableTimerProps> = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  if (editFormOpen) {
    return (
      <TimerForm
        id={props.id}
        onFormSubmit={props.onFormSubmit}
        onFormClose={() => setEditFormOpen(!editFormOpen)}
      />
    );
  } else {
    return (
      <Timer
        id={props.id}
        title={props.title}
        project={props.project}
        elapsed={props.elapsed}
        runningSince={props.runningSince}
        onEditClick={() => setEditFormOpen(!editFormOpen)}
      />
    );
  }
};
