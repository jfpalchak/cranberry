// Helper functions for getting, setting, and removing
// user credentials (JWT and User Id) with local browser storage

export const getCredentials = () => {
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('user');
  return { token, userId }
}

export const removeCredentials = (): void => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

export const setCredentials = (token: string, userId: string): void => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('user', userId);
}