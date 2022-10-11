import { FC, useState } from 'react';
import { TimerForm } from './TimeForm';
import { Timer } from './Timer';
import { ITimer } from './TimerDashboard';

type EditableTimerProps = ITimer & {
  onFormSubmit: (timer: ITimer) => void;
  onDeleteSubmit: (id: string) => void;
};

export const EditableTimer: FC<EditableTimerProps> = (props) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleFormSubmit = (timer: ITimer) => {
    setEditFormOpen(!editFormOpen);
    props.onFormSubmit(timer);
  };

  if (editFormOpen) {
    return (
      <TimerForm
        id={props.id}
        onFormSubmit={handleFormSubmit}
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
        onDeleteClick={props.onDeleteSubmit}
      />
    );
  }
};
