import useProcessContextState from 'hooks/useProcessContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { ProcessContextState } from 'types/contexts/process';
import processDirectory from 'utils/processDirectory';

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

interface ProcessProviderProps {
  children: React.ReactNode;
}

export const ProcessProvider: FC<ProcessProviderProps> = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
