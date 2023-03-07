import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { SessionContextState } from 'types/contexts/session';

const SessionContext = createContext<SessionContextState>({});

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
