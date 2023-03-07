import type { SessionContextState } from 'types/contexts/session';

const useSessionContextState = (): SessionContextState => ({
  theme: undefined // TODO: Load user theme from LocalStorage
});

export default useSessionContextState;
