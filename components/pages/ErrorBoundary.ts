import { Component } from "react";

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  React.PropsWithChildren<Record<never, unknown>>,
  ErrorBoundaryState
> {
  public constructor(props: React.PropsWithChildren<Record<never, unknown>>) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public render(): React.ReactNode {
    const { hasError } = this.state;

    if (hasError && !("__REACT_DEVTOOLS_GLOBAL_HOOK__" in window)) {
      window.location.reload();

      return;
    }

    const { children } = this.props;

    // eslint-disable-next-line consistent-return
    return children;
  }
}
