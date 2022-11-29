export const calculateDayDifference = (pastDate) => {
  const parsedPastDate = new Date(pastDate);
  const parsedTodayDate = new Date();

  const diffInMs = parsedTodayDate.getTime() - parsedPastDate.getTime();
  const diffInDays = diffInMs / 1000 / 86400;

  return Math.floor(diffInDays);
};
