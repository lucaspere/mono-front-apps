import React, { FC } from 'react';
import styled from 'styled-components';
import { helpers } from './helpers';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <TimersDashboard />
    </StyledApp>
  );
}

const TimersDashboard = () => {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimersList />
          <ToggleableTimerForm isOpen={true} />
        </div>
      </div>
    )
  }

const EditableTimersList = () => {
    return (
      <div id='timers'>
        <EditableTimer
          title='Learn React'
          project='Wb Domination'
          elapsed='8986300'
          runningSince={null}
          editFormOpen={false}
        />
        <EditableTimer
          title='Learn extreme ironing'
          project='World Domination'
          elapsed='3890985'
          runningSince={null}
          editFormOpen={true}
        />
      </div>
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
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' defaultValue={props.title}/>
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text' defaultValue={props.project}/>
            </div>
            <div>
              <button className='ui basic blue buttons'>
                {submitText}
              </button>
              <button className='ui basic red buttons'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

type ToggleableTimerFormProps = {
  isOpen: boolean;
}

const ToggleableTimerForm: FC<ToggleableTimerFormProps> = (props) => {
  if (props.isOpen) return <TimerForm />
  else
    return (
      <div className='ui basic content center aligned segment'>
        <button className='ui basic button icon'>
        <i className='plus icon' />
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
    <div className='ui centered card'>
      <div className='content'>
        <div className='header'>
          {props.title}
        </div>
        <div className='meta'>
          {props.project}
        </div>
        <div className='center aligned description'>
          <h2>
            {elapsedString}
          </h2>
        </div>
        <div className='extra content'>
          <span className='right floated edit icon'>
            <i className='edit icon' />
          </span>
          <span className='right floated trash icon'>
            <i className='trash icon' />
          </span>
        </div>
      </div>
      <div className='ui bottom attached blue basic button'>
        Start
      </div>
    </div>
  )
}
export default App;
