import React, { FC } from 'react';
import styled from 'styled-components';
import { helpers } from './helpers';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp className='h-screen bg-[#f1f6f4]'>
      <TimersDashboard />
    </StyledApp>
  );
}

const TimersDashboard = () => {
    return (
      <div className='font-sans box-border max-w-container px-4'>
        <div className='space-y-2 m-auto w-[350px] mt-2 bg-white shadow-md'>
          <h1 className='text-2xl font-semibold text-indigo-700 text-center '>Timers</h1>
          <hr className='ring-1 ring-gray-300 border-0'/>
          <EditableTimersList />
          <ToggleableTimerForm isOpen={false} />
        </div>
      </div>
    )
  }

const EditableTimersList = () => {
    return (
      <section id='timers' className='flex flex-col justify-between space-y-4'>
        <EditableTimer
          title='Learn React'
          project='Wb Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title='Learn React'
          project='Wb Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title='Learn React'
          project='Wb Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={true}
        />

      </section>
    )
}

type EditableTimerProps = {
  title: string;
  project: string;
  elapsed: string;
  runningSince: string | null;
  editFormOpen: boolean
}

const EditableTimer: FC<EditableTimerProps> = (props) => {
    if (props.editFormOpen) {
      return (
        <TimerForm
          title={props.title}
          project={props.project}
        />
      )
    } else {
      return (
        <Timer
          title={props.title}
          project={props.project}
          elapsed={props.elapsed}
          runningSince={props.runningSince}
        />
      )
  }
}

type TimerFormProps = {
  title?: string;
  project?: string;
}

const TimerForm: FC<TimerFormProps> = (props) => {
    const submitText = props.title ? 'Update' : 'Create';

    return (
          <form className='bg-white shadow-md rounded px-8 pt-4 pb-6 mb-2'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' defaultValue={props.title}/>
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>Project</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' defaultValue={props.project}/>
            </div>
            <div className='flex justify-evenly'>
              <button className='rounded-md border border-indigo-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-indigo-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'>
                {submitText}
              </button>
              <button className='rounded-md border border-red-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-red-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2'>
                Cancel
              </button>
            </div>
      </form>
    )
}

type ToggleableTimerFormProps = {
  isOpen: boolean;
}

const ToggleableTimerForm: FC<ToggleableTimerFormProps> = (props) => {
  if (props.isOpen) return <TimerForm />
  else
    return (
      <div className='flex justify-center h-14 min-h-fit'>
        <button className='rounded-md border border-gray-300 bg-white py-1 px-2 my-2 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

        </button>
      </div>
  )
}

type TimerProps = {
  title: string;
  project: string;
  elapsed: string;
  runningSince: string | null;
}

const Timer: FC<TimerProps> = (props) => {
  const elapsedString = helpers.renderElapsedString(props.elapsed, props.runningSince)

  return (
    <div className='flex flex-col space-y-2 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
      <div>
        <div className='pl-3 pt-3'>
          <p className='text-start text-lg font-medium'>
            {props.title}
          </p>
          <p className='text-base antialiased font-light text-gray-500'>
            {props.project}
          </p>
        </div>
        <div className='justify-center flex mt-2'>
          <p className='text-3xl font-semibold text-gray-600'>
            {elapsedString}
          </p>
        </div>
        <div className='flex justify-end mr-2'>
          <span className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </span>
          <span className='cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </span>
        </div>
      </div>
      <p className='flex justify-center items-center h-[40px] border-green-500 border-t-2 text-green-600 text-xl cursor-pointer'>
        Start
      </p>
    </div>
  )
}
export default App;
