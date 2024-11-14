let THROTTLE: ReturnType<typeof setTimeout> | null = null;

export const throttle = (executeFunction: () => void, delay: number) => {
  if (THROTTLE) {
    clearTimeout(THROTTLE);
  }

  THROTTLE = setTimeout(() => executeFunction(), delay);
};
