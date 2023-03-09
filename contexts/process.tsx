import useProcessContextState from 'hooks/useProcessContextState';
import { createContext } from 'react';
import type {
  ProcessContextState,
  ProcessProviderProps
} from 'types/contexts/process';
import { initialProcessContextState } from 'utils/initialContextStates';

const { Consumer, Provider } = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: React.FC<ProcessProviderProps> = ({
  children
}) => <Provider value={useProcessContextState()}>{children}</Provider>;

export const ProcessConsumer = Consumer;
