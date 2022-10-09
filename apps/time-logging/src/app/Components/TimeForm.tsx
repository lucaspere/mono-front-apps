import { FC, useState } from 'react';
import { ITimer } from './TimerDashboard';

export type TimerFormProps = {
  id?: string;
  onFormSubmit: (timer: ITimer) => void;
  onFormClose: () => void;
};

export const TimerForm: FC<TimerFormProps> = (props) => {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');

  const submitText = props.id ? 'Update' : 'Create';

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.onFormSubmit({ title, project, id: props.id! } as ITimer);
  };
  return (
    <form className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 px-3 pt-4 pb-4 mb-2">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Project
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={handleSubmit}
          className="rounded-md border border-indigo-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-indigo-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          {submitText}
        </button>
        <button
          onClick={props.onFormClose}
          className="rounded-md border border-red-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-red-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
