export const convertSecondsTimeToDate = (seconds, showTime = false) => {
  const date = new Date(seconds * 1000);
  const d = date.getDate().toString().padStart(2, 0);
  const m = (date.getMonth() + 1).toString().padStart(2, 0);
  const y = date.getFullYear();
  if (!showTime) {
    return `${d}/${m}/${y}`;
  }
  const hours = date.getHours().toString().padStart(2, 0);
  const mins = date.getMinutes().toString().padStart(2, 0);
  const secs = date.getSeconds().toString().padStart(2, 0);
  return `${d}/${m}/${y} ${hours}:${mins}:${secs}`;
};
