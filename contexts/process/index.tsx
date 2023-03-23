import type { ProcessContextState } from 'contexts/process/useProcessContextState';
import useProcessContextState from 'contexts/process/useProcessContextState';
import contextFactory from 'contexts/contextFactory';
import { initialProcessContextState } from 'contexts/initialContextStates';

const { Consumer, Provider, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
