declare global {
  interface Window {
    VANTA: {
      DOTS: (options: Record<string, unknown>) => {
        destroy: () => void;
      };
    };
    THREE: unknown;
  }
}

export {};
