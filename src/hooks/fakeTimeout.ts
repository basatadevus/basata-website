let isTimeout = false;
const pendingPromise = new Promise<void>((resolve) => {
  setTimeout(() => {
    isTimeout = true;
    resolve();
  }, 3000);
});

export const useFakeTimeout = () => {
  if (!isTimeout) {
    throw pendingPromise;
  }
  return true;
};
