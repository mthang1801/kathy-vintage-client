const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_test_GqeDNGLAbXcAnQ8xs8OAzKcW00uS9xIftb'
    : 'pk_test_GqeDNGLAbXcAnQ8xs8OAzKcW00uS9xIftb';

export default STRIPE_PUBLISHABLE;
