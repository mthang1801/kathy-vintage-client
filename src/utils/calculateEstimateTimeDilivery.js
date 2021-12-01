const calculateEstimateTimeDilivery = (days, hours) => {
  const estimator = days
    ? new Date(Date.now() + 7 * 86400 * 1000)
    : hours
    ? new Date(Date.now() + 2 * 3600 * 1000)
    : null;

  if (estimator) {
    const getDate = estimator.getDate().toString().padStart(2, 0);
    const getMonth = (estimator.getMonth() + 1).toString().padStart(2, 0);
    const getYear = estimator.getFullYear();
    return `${getDate}/${getMonth}/${getYear}`;
  }
  return null;
};

export default calculateEstimateTimeDilivery;
