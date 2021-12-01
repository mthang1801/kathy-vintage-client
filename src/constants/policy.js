export default {
  tax: 10,
  estimateTimeDelivery: {
    standard: {
      days: 7,
      hours: 0,
    },
    fast: {
      days: 0,
      hours: 2,
    },
  },
  authenticate: {
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  },
};
