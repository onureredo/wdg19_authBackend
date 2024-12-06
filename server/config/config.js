const config = {
  isProduction: process.env.NODE_ENV === 'production',
  corsOrigin:
    process.env.NODE_ENV === 'production'
      ? 'https://netlify/renderDeployment.com'
      : 'http://localhost:5173',
  cookieSettings: {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'lax',
    secure: process.env.NODE_ENV === 'production',
  },
};

export default config;
