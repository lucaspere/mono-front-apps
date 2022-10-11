import { FC, useState } from 'react';
import { TimerForm } from './TimeForm';
import { ITimer } from './TimerDashboard';

export type ToggleableTimerFormProps = {
  onFormSubmit: (timer: ITimer) => void;
};

export const ToggleableTimerForm: FC<ToggleableTimerFormProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleFormSubmit = (timer: ITimer) => {
    setIsOpen(!isOpen);
    props.onFormSubmit(timer);
  };

  if (isOpen)
    return (
      <TimerForm onFormSubmit={handleFormSubmit} onFormClose={handleFormOpen} />
    );
  else
    return (
      <div className="flex justify-center h-14 min-h-fit">
        <button
          onClick={handleFormOpen}
          className="rounded-md border border-gray-300 bg-white py-1 px-2 my-2 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    );
};
